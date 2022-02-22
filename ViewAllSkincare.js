let product=document.getElementById("product");

// product.innerHTML="hello check check check";
async function MakeApiCall(url)
{
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);

    }catch(error){
       console.log("error",error);
    }
}
 MakeApiCall("https://shrouded-earth-23381.herokuapp.com/api/headlines/india");