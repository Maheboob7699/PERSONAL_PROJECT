// let loginBtn=document.querySelector(".login-btn");
// let username=document.querySelector("#email-inpt").value;
// let password=document.querySelector("#pass-inpt").value;

// let userInput=localStorage.getItem("Email");
// let passInput=localStorage.getItem("Password");
//  console.log(userInput);
//  console.log(passInput);


 

// loginBtn.addEventListener("click",function(){

// //  if(username.value==userInput && password.value==passInput)
// //    {
// //    //  window.location.href="quizz.html";
// //    alert("login succcesfully");
   
// //    }

// //    else
// //    {
// //    //  alert("login Failed");
// //    //  username.value="";
// //    //  password.value="";
// //    alert("login Failed");
// //  }


// if(username=="" && password=="")
// {
//   alert("User Name is Empty");
// }


// else if(username!=="" && password!=="")
// {
// alert("login Succesfull");
// }


// })


 let loginBtn=document.querySelector(".login-btn");
let email=document.querySelector("#email-inpt");
 let password=document.querySelector("#pass-inpt");

 let emailResult= document.querySelector(".email-result");
 let passResult = document.querySelector(".pass-result");

loginBtn.addEventListener("click",function(){
  
  if(email.value=="")
  {
    emailResult.innerHTML="Email is Empty";

   
    
    
  }

  else if(email.value.length<=6){
    emailResult.innerHTML="usernmae is Smaller than 6";
    console.log("usernmae is Smaller than 6")
  }


  if(password.value=="")
    {
      passResult.innerHTML=" Password is Empty";
     
      
    }

    else if(password.value.length<=6){
      passResult.innerHTML="Password is Smaller than 6";
    }
  
    else if( password.value.length>=12)
    {
      passResult.innerHTML=" password is greater than 12";
      password.value="";
      
    }

    else
    {
      window.location.href="signup.html";
      let userValue = JSON.stringify(email.value);
      let userPassword = JSON.stringify(password.value);
      localStorage.setItem("Email",userValue);
     localStorage.setItem("Password", userPassword);
     
    }

  
})