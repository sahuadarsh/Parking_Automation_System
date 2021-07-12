firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        var db = firebase.firestore();
        console.log("login successful!");
        var user = firebase.auth().currentUser;
        var key = user.uid;
        console.log(user.uid);
        const cityRef = db.collection('Customers').doc(key);
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            const name = doc.data().name;
            const address = doc.data().address;
            const city = doc.data().city;
            const email = doc.data().email;
            const mobile_no = doc.data().mobile_no;
            const gender = doc.data().gender;
            const state = doc.data().state;
            const vehicle_no = doc.data().vehicle_no;
            const zip = doc.data().zip;

            if (gender == "MALE") {
                var image = document.getElementById('image');
                image.src = "avatar.png";
            } else {
                var image = document.getElementById('image');
                image.src = "female avatar.png";
            }

            document.getElementById("name").innerHTML = name;
            document.getElementById("address").innerHTML = address;
            document.getElementById("city").innerHTML = city;
            document.getElementById("email").innerHTML = email;
            document.getElementById("state").innerHTML = state;
            document.getElementById("vehicle_no").innerHTML = vehicle_no;
            document.getElementById("zip").innerHTML = zip;
            document.getElementById("gender").innerHTML = gender;
            document.getElementById("mobile_no").innerHTML = mobile_no;
        }
    }
});