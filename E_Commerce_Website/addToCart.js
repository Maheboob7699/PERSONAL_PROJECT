let cartContainer  = document.querySelector(".cartContainer");

let basketValue = JSON.parse(localStorage.getItem('localData'));

    basketValue.forEach((basketData)=>{
        let {id,category,image,rating,title,price} = basketData;
    
       let cartItem =  document.createElement("div");
       cartItem.className="cartItem";
       cartItem.innerHTML =`  
                            
                                   <h4>${category}</h4>
                             <img src="${image}" alt="">
                                 <p>Rating</p>
                           <div class="product-description">${title}</div>`
    
                           let removeLocal = document.createElement("button");
                           removeLocal.className = "removeItem";
                           cartItem.setAttribute('data-id', id);
                           let removeText = document.createTextNode("remove");
                           removeLocal.append(removeText);
    
                          removeLocal.addEventListener("click",function(){
                            cartItem.remove();
                            basketValue = basketValue.filter(item => item.id !== id);
                            localStorage.setItem('localData', JSON.stringify(basketValue));

                            if (basketValue.length === 0) {
                                const emptyMessage = document.createElement("div");
                                emptyMessage.textContent = "Your Cart is Empty";
                                cartContainer.append(emptyMessage);
                            }
                     
                          })
                
                     
                
    
                         cartItem.append(removeLocal);
                         cartContainer.append(cartItem);
                       cartContainer.append(cartItem);
        
    })









 
