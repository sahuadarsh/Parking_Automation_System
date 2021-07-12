var db = firebase.firestore();
let register = document.getElementById("register");

register.addEventListener("click", function() {
    //get the value from the user

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conf_password = document.getElementById("conf_password").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let vehicle_no = document.getElementById("Vehicle_no").value;
    let mobile_no = document.getElementById("mobile_no").value;
    let gender = document.getElementById("gender").value;
    // check wether the password match or not

    if (password != conf_password) {
        alert("password doesn't match");
    }
    //check no field is empty
    else if (name == "" || email == "" || password == "" || conf_password == "" || address == "" || city == "" || state == "" || zip == "") {
        alert("enter the all values");
    }
    //if all the entries filed correctly then enter all the entries into database 
    else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(response) {
                console.log(firebase.auth().currentUser.uid);
                console.log(response);
                db.collection("Customers").doc(firebase.auth().currentUser.uid).set({
                        name: name,
                        password: password,
                        address: address,
                        city: city,
                        state: state,
                        zip: zip,
                        vehicle_no: vehicle_no,
                        mobile_no: mobile_no,
                        gender: gender,
                        userId: firebase.auth().currentUser.uid,
                        email: firebase.auth().currentUser.email
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", firebase.auth().currentUser.uid);
                        alert("Registration Successful!");
                        window.location.href = "login.html";
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            });
    }
    //alert("Registration Successful!");
    //window.location.href = "login.html";
})