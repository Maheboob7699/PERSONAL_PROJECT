let sigInUser = document.querySelector("#signIn-inpt");
let sigInPass = document.querySelector("#sigIn-pass");
let  sigInBtn = document.querySelector(".signIn-btn");


sigInBtn.addEventListener("click",function(){
   

    let signUser1 = localStorage.getItem('Email');
    let sigInPass1 = localStorage.getItem('Password');
    
    let signUser2 = JSON.parse(signUser1);
    let sigInPass2 = JSON.parse(sigInPass1);


    if(sigInUser.value == signUser2 && sigInPass.value == sigInPass2){
        window.location.href="quizz.html";
    }

    
})

