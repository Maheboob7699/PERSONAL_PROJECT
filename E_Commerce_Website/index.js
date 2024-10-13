let  productItem = document.querySelector(".productItem");
let basket =[];
 
let productApi = 'https://fakestoreapi.com/products';
fetch(productApi)
.then((res)=>{
   
    return res.json()
})
.then((data)=>{
    data.forEach((productValue)=>{
      
        let {id,category,image,rating,title,price} = productValue;
        let productData = document.createElement("div");
        productData.className= "product-data";
        productData.innerHTML = 
                                 `<h4>${category}</h4>
                                  <img src="${image}" alt="">
                                  <p>${rating.rate}</p>
                                  <div class="product-description">${title}</div>`

                                 let  cartBtn  = document.createElement("button");
                                 cartBtn.className ="cartBtn";
                                 let cart = document.createTextNode("Add");
                                 cartBtn .append(cart);
                                  productData.append(cartBtn);
                                  productItem.append(productData);
                                  cartBtn.addEventListener("click",()=>cartData(id,category,image,rating.rate,title,price))
                                  
    })  
})

function cartData(id,category,image,rating,title,price){
  // const existingProduct = basket.find(item => item.id === id);
  const existingProduct= basket.find((item)=>{
   item.id;
   console.log(item.id);
   
  })
  console.log(existingProduct);
  
    // basket.push({
    //     id:id,
    //    category:category,
    //    image:image,
    //    rating: rating,
    //    title :title,
    //    price : price,

    // })
    // console.log(basket);
    // localStorage.setItem('localData',JSON.stringify(basket));
    // cartCount ();
  }

//   cart Count

  function cartCount (){
    let cartCount = document.querySelector(".cartCount");
    cartCount.innerHTML=basket.length;
  }

  






