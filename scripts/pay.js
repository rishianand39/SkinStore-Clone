document.querySelector("#form1").addEventListener("submit", proceed);
function proceed(event){
    event.preventDefault();
    alert("Proceeding to OTP");
    window.location.href = "../otp.html";
}