function register(){
    window.location.href="../register.html"
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let ans = formValidation(email, password);

    if (ans == true) {
        Login()
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

// const mapData = (userData, email, password) => {
//     let flag = false;
//     userData.map((element) => {
//         if (email == element.email && password == element.password) {
//             console.log(element.email);
//             console.log(element.password);
//             flag = true;
//             window.location.href = "/Home-Page/index.html";
//             return;
//         }
//     });
//     if (flag == false) {
//         window.alert("Invalid credentials");
//     }
// };

let Login=async()=>{

    try {
        let login_data={
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value,
        }

        login_data=JSON.stringify(login_data);
        let res=await fetch("https://skinstoreproject.herokuapp.com/login",{
            method:"POST",
            body:login_data,
            headers:{
                "content-Type":"application/json",
            }
        });

        let data=await res.json();
        console.log({data:data});


          if(data.token){
            window.location.href="../index.html"
          }else{
              alert("Invalid credentials")
          }



    } catch (error) {
        console.log({error:error.message})
    }
}

