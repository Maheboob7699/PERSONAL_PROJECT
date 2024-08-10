let loginBtn=document.querySelector(".login-btn");
let username=document.querySelector("#email-inpt");
let password=document.querySelector("#pass-inpt");

let userInput=localStorage.getItem("Email");
let passInput=localStorage.getItem("Password");
 console.log(userInput);
 console.log(passInput);
 

loginBtn.addEventListener("click",function(){

   if(username.value==userInput && password.value==passInput)
   {
    window.location.href="quizz.html";
   
   }

   else{
    alert("login Failed");
    username.value="";
    password.value="";
   }


})


