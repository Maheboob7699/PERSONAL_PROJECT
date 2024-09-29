colorBtn1 = document.querySelector(".button-1");
bodyColor = document.querySelector("body");
colorBtn2 = document.querySelector(".button-2");

let backgroundData = document.querySelector(".background-data");


let value = "0123456789ABCDEF"
let randomValue ="";
color = "#";
data="";

// colorBtn.addEventListener("click",function(){
//  for(let i=0; i < 6; i++){
  
//      data = color + value[Math.floor(Math.random()*16)];
     
     

    
     

//  }
 
colorBtn1.addEventListener("click",function(){
    let value = "0123456789ABCDEF";

    let color ="#";
  

    for(let i=0; i<6; i++){
        color+= value[Math.floor(Math.random()*16)];
    }
    console.log(color);
   
    
    
    console.log(color);
    document.body.style.backgroundColor=`${color}`;

    backgroundData.innerText  = color;
    
})

 

 
colorBtn2.addEventListener("click",function(){
    let value = "0123456789ABCDEF";

    let color ="#";
  

    for(let i=0; i<6; i++){
        color+= value[Math.floor(Math.random()*16)];
    }
    console.log(color);
    document.body.style.backgroundColor=`${color}`;
    backgroundData.innerText = color;
     
})