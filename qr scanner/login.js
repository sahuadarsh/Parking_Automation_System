let login = document.getElementById("login");
login.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //Sign In User with Email and Password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log("login successful!");
            console.log(userCredential);
            window.location.href = "index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
});