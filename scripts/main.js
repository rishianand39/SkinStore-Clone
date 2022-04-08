async function APIcall(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


function append(data,parent)
{
    parent.textContent = ""
    data.map(function(e){


        let div = document.createElement("div")
        div.setAttribute("id","singleproduct")
    
        let image = document.createElement("img")
        image.src = e.api_featured_image
        image.setAttribute("id","image")
        image.addEventListener("click",function()
        {
         

            var info = []
            info.push(e)
            localStorage.setItem("info",JSON.stringify(info))
            window.location.href="info.html"

        })

        let name = document.createElement("h4")
        name.textContent = e.name

        // let discription = document.createElement("p")
        // discription.textContent=e.description;

        let div2 = document.createElement("div")
        div2.setAttribute("id","dis")

        div2.append(image)

        let heart = document.createElement("i")
        heart.setAttribute("class","fa fa-heart hearting")
        heart.addEventListener("click",function()
        {
            alert("Added To Wishlist")
        })

        heart.style.fontSize="30px"


        let star1 = document.createElement("span")
        star1.setAttribute("class","fa fa-star checked")
        

        
        let star2 = document.createElement("span")
        star2.setAttribute("class","fa fa-star checked")
       
        
        let star3 = document.createElement("span")
        star3.setAttribute("class","fa fa-star checked")
       
        
        let star4 = document.createElement("span")
        star4.setAttribute("class","fa fa-star checked")
       
        
        let star5 = document.createElement("span")
        star5.setAttribute("class","fa fa-star not_checked")
        
        let price = document.createElement("h2")
        price.textContent = `$ ${e.price}`

        
        let div3 = document.createElement("div")
        div3.setAttribute("id","cartbutton")

        // <i class="fa fa-heart" style="font-size:48px;color:red"></i>
        let cart = document.createElement("button")
        cart.textContent = `Quick Buy`
        cart.addEventListener("click",function()
        {
            var cart_arr = JSON.parse(localStorage.getItem("cart_arr"))||[]
            cart_arr.push(e)
            localStorage.setItem("cart_arr",JSON.stringify(cart_arr))
           
            alert(`Add To Cart Successfull`)
            window.location.href="/addToCart/cart.html"
        })
        
        cart.setAttribute("id","cart")
        div.append(heart,div2,name,star1,star2,star3,star4,star5,price,cart)

        parent.append(div)




    })
}




// export {APIcall,append}

