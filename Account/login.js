let userData = JSON.parse(localStorage.getItem("userDatabase"));

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let ans = formValidation(email, password);
    console.log(ans);
    if (ans == true) {
        mapData(userData, email, password);
    }
});

function formValidation(email, password) {
    if (email == "") {
        document.getElementById("eml").innerHTML = "  ** Please fill the email field";
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
    return true;
}

const mapData = (userData, email, password) => {
    let flag = false;
    userData.map((element) => {
        if (email == element.email && password == element.password) {
            console.log(element.email);
            console.log(element.password);
            flag = true;
            window.location.href = "/Home-Page/index.html";
            return;
        }
    });
    if (flag == false) {
        window.alert("Invalid credentials");
    }
};
