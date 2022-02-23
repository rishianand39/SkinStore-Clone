let userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
localStorage.setItem("userDatabase", JSON.stringify(userData));

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let con_email = document.querySelector("#con-email").value;
    let password = document.querySelector("#password").value;
    let con_password = document.querySelector("#con-password").value;
    let number = document.querySelector("#number").value;
    let ref_code = document.querySelector("#ref-code").value;
    let ans = formValidation(name, email, con_email, password, con_password, number, ref_code);
    if (ans == true) {
        function Person(name, email, con_email, password, con_password, number, ref_code) {
            this.name = name;
            this.email = email;
            this.con_email = con_email;
            this.password = password;
            this.con_password = con_password;
            this.number = number;
            this.ref_code = ref_code;
        }
        const person = new Person(name, email, con_email, password, con_password, number, ref_code);
        console.log(person);
        userData.push(person);
        localStorage.setItem("userDatabase", JSON.stringify(userData));
        window.location.href = "login.html";
    }
});

// --------------- Form Validation------------------

function formValidation(name, email, con_email, password, con_password, number, ref_code) {
    if (name == "") {
        document.getElementById("nme").innerHTML = "  ** Please fill the name field";
        return false;
    }
    if (name.length <= 2 || name.length > 20) {
        document.getElementById("nme").innerHTML = "  ** Name length must be between 2 and 20";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById("nme").innerHTML = "  ** Only characters are allowed";
        return false;
    }

    if (email == "") {
        document.getElementById("eml").innerHTML = "  ** Please fill the email field";
        return false;
    }

    if (con_email == "") {
        document.getElementById("conEmail").innerHTML = "  ** Please fill the confirm email field";
        return false;
    }
    if (email != con_email) {
        document.getElementById("eml").innerHTML = "  ** Email and confirm email is not matching";
        return false;
    }

    if (password == "") {
        document.getElementById("pass").innerHTML = "  ** Please fill the password field";
        return false;
    }
    if (password.length <= 6 || password.length > 15) {
        document.getElementById("pass").innerHTML = "  ** Password should be in between 6 and 15";
        return false;
    }

    if (con_password == "") {
        document.getElementById("conPass").innerHTML = "  ** Please fill the confirm password field";
        return false;
    }
    if (password != con_password) {
        document.getElementById("pass").innerHTML =
            "  ** Password and confirm password is not matching";
        return false;
    }
    if (number == "") {
        document.getElementById("num").innerHTML = "  ** Please fill the number field";
        return false;
    }
    if (isNaN(number)) {
        document.getElementById("num").innerHTML = "  ** Please fill numbers only";
        return false;
    }
    if (number.length != 10) {
        document.getElementById("num").innerHTML = "  ** Mob. number must be of 10 digits";
        return false;
    }

    return true;
}