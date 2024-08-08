let username=document.querySelector("#email-inpt");
let password=document.querySelector("#pass-inpt");
let loginBtn=document.querySelector(".login-btn");

let userInput=localStorage.getItem("email");
let passwordValue=localStorage.getItem("password");

loginBtn.addEventListener("click",function(){
    
if(username.value==userInput && password.value==passwordValue)
    {
     window.location.href="signin.html";   
    }
    else
    {
        alert("Login Failed");
        username.value="";
        password.value="";
    }
    
})

