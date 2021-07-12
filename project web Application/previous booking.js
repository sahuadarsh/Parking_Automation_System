firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        var key = user.uid;
        console.log(user.uid);
        const arr = []
        const citiesRef = db.collection('History');
        const snapshot = await citiesRef.get();
        snapshot.forEach(doc => {
            (doc.data().Uid == key ? arr.push({ Slot: doc.data().Slot, In_Time: doc.data().In_Time, Out_Time: doc.data().Out_Time, Book_date: doc.data().Book_Date }) : null);
        });
        console.log(arr);
        var count = 1;
        for (x of arr) {
            document.getElementById('data').innerHTML += '<li>' +
                "<h2>" + "Number -: " + count + "</h2>" +
                "<h3>" + "Slot No. -: " + x.Slot + "</h3>" +
                "<h3>" + "Booked Date -: " + x.Book_date + "</h3>" +
                "<h3>" + "In Time -: " + x.In_Time + "</h3>" +
                "<h3>" + "Out Time -: " + x.Out_Time + "</h3>" +
                '</li>';
            count++;
        }
    }
});