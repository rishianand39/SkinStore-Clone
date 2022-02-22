let parent=document.getElementById("product");

// product.innerHTML="hello check check check";
async function MakeApiCall(url)
{
    try{
        let res=await fetch(url);
        let data=await res.json();
        // console.log(data);
        appenddata(data,parent);

    }catch(error){
       console.log("error",error);
    }
}
 MakeApiCall("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
 function appenddata(data,parent){
     console.log("data",data);
  data.forEach((element)=> {
    let div=document.createElement("div");
    div.style.padding="6px";
    let image=document.createElement("img");
    image.src=element.image_link;
    // image.style.hover=element.product_link;
    let name=document.createElement("p");
    name.innerHTML=element.name;
    let t=document.createElement("p");
    let type=document.createElement("span");
    type.innerHTML=element.product_type;
    type.style.padding="0 10px";
    type.style.border="1px solid red";
    t.append(type);
    let reating=document.createElement("p");
    reating.innerHTML=`*****( ${element.rating} )`;
    let price=document.createElement("p");
    price.innerHTML=`$ ${element.price}`;
    price.style.fontWeight="bold";
    price.style.fontSize="25px";
    let buttondiv=document.createElement("div");
    let buttonb=document.createElement("button");
    buttonb.innerHTML="QUICK BUY";
    buttonb.style.background="black";
    buttonb.style.color="white";
    buttonb.style.width="100%";
    buttonb.style.padding="10px 10px";
    buttondiv.append(buttonb);


   
    div.append(image,name,t,reating,price,buttonb);
    parent.append(div);
      
  });
 }