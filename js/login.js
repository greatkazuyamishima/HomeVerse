document.getElementById("loginBtn").onclick = function () {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill all fields!");
    } 
    else {
        alert("Login Successful!");
    }
};
document.getElementById("password").onkeyup = function () {

    let pass = document.getElementById("password").value;
    let msg = document.getElementById("strength");

    if (pass.length === 0) {
        msg.textContent = "";
    }
    else if (pass.length < 4) {
        msg.textContent = "Weak password";
        msg.style.color = "red";
    }
    else if (pass.length < 7) {
        msg.textContent = "Medium password";
        msg.style.color = "orange";
    }
    else {
        msg.textContent = "Strong password";
        msg.style.color = "green";
    }
};
let inputs = ["email", "password"];
for (let i = 0; i < inputs.length; i++) {

    let field = document.getElementById(inputs[i]);

    field.onfocus = function () {
        field.style.border = "2px solid #0b63d6";
        field.style.background = "#eef5ff";
    };

    field.onblur = function () {
        field.style.border = "1px solid #ccc";
        field.style.background = "white";
    };

}
