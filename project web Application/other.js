var ref = database.ref("Customers/" + user.uid);
ref.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var name;
        var data = childSnapshot.val();
        console.log(data);
        name = data.name;
        address = data.address;
        city = data.city;
        email = data.email;
        state = data.state;
        zip = data.zip;
        vehicle_no = data.vehicle_no;
        image = data.image;
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("email", email);
        localStorage.setItem("state", state);
        localStorage.setItem("zip", zip);
        localStorage.setItem("vehicle_no", vehicle_no);
        localStorage.setItem("image", image);
        localStorage.setItem("id", ref);
        window.location.href = "profile.html";
    });
})