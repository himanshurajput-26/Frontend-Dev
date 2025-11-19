document.getElementById("bookForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;

    if(!/^[A-Za-z ]+$/.test(name)) return alert("Invalid Name");
    if(!/^[\w.-]+@[a-z]+\.[a-z]{2,}$/.test(email)) return alert("Invalid Email");
    if(!(seats >= 1 && seats <= 10)) return alert("Seats must be 1–10");

    const booking = {name, email, seats};
    alert("Ticket Booked:\n" + JSON.stringify(booking, null, 2));
});
