
async function MakeApiCall(url)
{
    try{
        let res=await fetch(url);
        let data=await res.json();
        // console.log(data);
       return data;

    }catch(error){
       console.log("error",error);
    }
}

 function appenddata(data,parent){
     parent.innerHTML="";
     console.log("data",data);
  data.forEach((element)=> {   
    let div=document.createElement("div");
    div.style.padding="6px";
    div.style.cursor="pointer";
    div.onclick=()=>{
        localStorage.setItem("clicked_details",JSON.stringify(element));
        window.location.href="ProductDetails.html";
    };
    let div1=document.createElement("div");
    div1.style.display="flex";
    div1.style.justifyContent="space-around";
    let image=document.createElement("img");
    image.src=element.api_featured_image;
    let wish=document.createElement("img");
    wish.setAttribute("id","wish")
    wish.src="wish.jpg";
    div1.append(image,wish);
    // image.style.hover=element.product_link;
    let name=document.createElement("p");
    name.innerHTML=element.name;
    name.style.overflow="hidden";
    name.style.height="100px";
    let t=document.createElement("p");
    let type=document.createElement("span");
    type.innerHTML=element.brand;
    type.style.padding="0 10px";
    type.style.border="1px solid red";
    t.append(type);
    let reating=document.createElement("p");
    let str=document.createElement("span");
    str.textContent="*****  ";
    str.style.color="yellow";
    str.style.fontSize="30px";
    let ret=document.createElement("span");
    ret.innerHTML=`() `;
    // reating.innerHTML=`*****( ${} )`;
    reating.append(str,ret);


    let price=document.createElement("p");
    price.innerHTML=`$ ${element.price}`;
    price.style.fontWeight="bold";
    price.style.fontSize="25px";
    let box=document.createElement("div");
    // Addtocart
    let buttondiv=document.createElement("div");
    
    let buttonb=document.createElement("button");
    buttonb.innerHTML="QUICK BUY";
    buttonb.style.background="black";
    buttonb.style.cursor="pointer";
    buttonb.style.color="white";
    buttonb.style.width="100%";
    buttonb.style.padding="10px 10px";
    buttondiv.append(buttonb);
    // let id=document.createElement("p");
    // id.innerHTML=element.id;

    buttondiv.onclick=function(event){
        addtocartt(element);
    }
   
    div.append(div1,name,t,reating,price);
    box.append(div,buttondiv);
    parent.append(box);
    //   }
  });
 }


 function  addtocartt(elem){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(elem);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(" Successfully item added to cart");
    // console.log(cart);
   window.location.href="manojcart.html";
}



export {MakeApiCall,appenddata}