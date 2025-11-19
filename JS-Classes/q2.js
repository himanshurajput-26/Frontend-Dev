document.getElementById("studentForm").addEventListener("submit", function(e){
    e.preventDefault();

    validate("name", /^[A-Za-z ]+$/, "Name must contain alphabets only");
    validate("email", /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "Invalid Email");
    validate("phone", /^[0-9]{10}$/, "Phone must be 10 digits");
    validate("password", /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/, "Weak Password");
});

function validate(id, regex, msg){
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if(regex.test(field.value)){
        field.style.border = "2px solid green";
        error.textContent = "";
    } else {
        field.style.border = "2px solid red";
        error.textContent = msg;
        error.style.color = "red";
    }
}
