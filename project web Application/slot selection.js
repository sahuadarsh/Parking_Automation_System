var current = new Date();
let in_time = current.toLocaleTimeString();
let book_date = current.toLocaleDateString();
let db = firebase.firestore();
var booked = []
db.collection('Slots')
    .get()
    .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        for (var i = 0; i < documents.length; i++) {
            booked.push(documents[i].Slot);
        }
        console.log(booked);
    })

let selectslot = null;

function check() {
    booked.forEach(color);
}

function A1() {
    selectslot = "A1";
    console.log("selected A1");
}

function A2() {
    selectslot = "A2";
    console.log("Selected A2");
}

function A3() {
    selectslot = "A3";
    console.log("Selected A3");
}

function A4() {
    selectslot = "A4";
    console.log("Selected A4");
}

function A5() {
    selectslot = "A5";
    console.log("Selected A5");
}

function A6() {
    selectslot = "A6";
    console.log("Selected A6");
}

function A7() {
    selectslot = "A7";
    console.log("Selected A7");
}

function A8() {
    selectslot = "A8";
    console.log("Selected A8");
}

function B1() {
    selectslot = "B1";
    console.log("Selected B1");
}

function B2() {
    selectslot = "B2";
    console.log("Selected B2");
}

function B3() {
    selectslot = "B3";
    console.log("Selected B3");
}

function B4() {
    selectslot = "B4";
    console.log("Selected B4");
}

function B5() {
    selectslot = "B5";
    console.log("Selected B5");
}

function B6() {
    selectslot = "B6";
    console.log("Selected B6");
}

function B7() {
    selectslot = "B7";
    console.log("Selected B7");
}

function B8() {
    selectslot = "B8";
    console.log("Selected B8");
}


function C1() {
    selectslot = "C1";
    console.log("Selected C1");
}

function C2() {
    selectslot = "C2";
    console.log("Selected C2");
}

function C3() {
    selectslot = "C3";
    console.log("Selected C3");
}

function C4() {
    selectslot = "C4";
    console.log("Selected C4");
}

function C5() {
    selectslot = "C5";
    console.log("Selected C5");
}

function C6() {
    selectslot = "C6";
    console.log("Selected C6");
}

function C7() {
    selectslot = "C7";
    console.log("Selected C7");
}

function C8() {
    selectslot = "C8";
    console.log("Selected C8");
}

function D1() {
    selectslot = "D1";
    console.log("Selected D1");
}

function D2() {
    selectslot = "D2";
    console.log("Selected D2");
}

function D3() {
    selectslot = "D3";
    console.log("Selected D3");
}

function D4() {
    selectslot = "D4";
    console.log("Selected D4");
}

function D5() {
    selectslot = "D5";
    console.log("Selected D5");
}

function D6() {
    selectslot = "D6";
    console.log("Selected D6");
}

function D7() {
    selectslot = "D7";
    console.log("Selected D7");
}

function D8() {
    selectslot = "D8";
    console.log("Selected D8");
}


function E1() {
    selectslot = "E1";
    console.log("Selected E1");
}

function E2() {
    selectslot = "E2";
    console.log("Selected E2");
}

function E3() {
    selectslot = "E3";
    console.log("Selected E3");
}

function E4() {
    selectslot = "E4";
    console.log("Selected E4");
}

function E5() {
    selectslot = "E5";
    console.log("Selected E5");
}

function E6() {
    selectslot = "E6";
    console.log("Selected E6");
}

function E7() {
    selectslot = "E7";
    console.log("Selected E7");
}

function E8() {
    selectslot = "E8";
    console.log("Selected E8");
}


function F1() {
    selectslot = "F1";
    console.log("Selected F1");
}

function F2() {
    selectslot = "F2";
    console.log("Selected F2");
}

function F3() {
    selectslot = "F3";
    console.log("Selected F3");
}

function F4() {
    selectslot = "F4";
    console.log("Selected F4");
}

function F5() {
    selectslot = "F5";
    console.log("Selected F5");
}

function F6() {
    selectslot = "F6";
    console.log("Selected F6");
}

function F7() {
    selectslot = "F7";
    console.log("Selected F7");
}

function F8() {
    selectslot = "F8";
    console.log("Selected F8");
}
if (booked.forEach(function(slot_check) {
        if (selectslot == slot_check) {
            selectslot = null;
            console.log("null")
        }
    }));


function color(item) {
    document.getElementById(item).style.backgroundColor = "white";
}

function Submit() {
    console.log("hii");
    var flag = 0;
    if (booked.forEach(function(slot_check) {
            if (selectslot == slot_check) {
                selectslot = null;
                console.log("null")
                flag = 1;
                window.alert("Invalid selection");
            }
        }));

    else if (selectslot == null && flag == 0) {
        console.log(selectslot);
        flag = 1;
        window.alert("Invalid selection");
    } else if (flag == 0) {
        firebase.auth().onAuthStateChanged(async function(user) {
            if (user) {
                var db = await firebase.firestore();
                console.log("login successful!");
                var user = await firebase.auth().currentUser;
                var key = await user.uid;
                const cityRef = db.collection('Customers').doc(key);
                const doc = await cityRef.get();
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    const name = doc.data().name;
                    console.log(name);
                }
                console.log(user.uid);
                db.collection("Slots").doc(key).set({
                        Slot: selectslot
                    }).then(function(docRef) {
                        console.log(docRef);
                        console.log("Succesfully enter data into Slots collection");
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                db.collection("History").add({
                        Book_Date: book_date,
                        Out_Time: "null",
                        In_Time: "null",
                        Slot: selectslot,
                        Uid: key
                    }).then(function(docRef) {
                        console.log(docRef);
                        console.log("Succesfully enter data into history collection");
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                window.alert(selectslot + " Slot successfully Booked");
                console.log(selectslot);
            }
        })
    }
}