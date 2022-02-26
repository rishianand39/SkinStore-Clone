document.querySelector("form").addEventListener("submit", proceed);
    function proceed(event){
        event.preventDefault();
        alert("Proceeding to payment");
        window.location.href = "/addToCart/Payment/pay.html";
    }