let logout = document.getElementById("logout");

function logout() {
    firebase.auth().signOut().then(() => {
            console.log('user logout');
            window.location.href = "login.html";
            //this.Props.history.push("/");
        })
        .catch(function(error) {
            //An error happened
            console.log('error');
        });
}