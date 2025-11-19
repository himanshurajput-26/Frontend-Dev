document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user.length < 5) return alert("Username must be 5 characters");

    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if(!passRegex.test(pass)) 
        return alert("Password must contain upper, lower, digit & special char");

    alert("Login Successful");
});
