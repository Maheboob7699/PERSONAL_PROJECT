

// quizz logic

let Quizz=[
    {
        q:"What is HTML ?",
        a:"dynamic",
        b:"Frontend",
        c:"Markup ",
        d:"backend",
        ans:"ans3"
    }
    ,

    {
        q:"What is CSS ?",
        a:"Cass Cading Style sheet",
        b:"Dynamic",
        c:"Markup ",
        d:"backend",
        ans:"ans1"
    }

    ,
    
    {
        q:"What is Js ?",
        a:"Frontend",
        b:"Dynamic",
        c:"Markup ",
        d:"backend",
        ans:"ans2",
    }
    ,
    {
        q:"What is  React Js ?",
        a:"Dynamic",
        b:"server side",
        c:"Markup ",
        d:"Frontend",
        ans:"ans1"
    }
]

let next=document.querySelector(".next-btn");
let question=document.querySelector("h2");
let option1=document.querySelector("#opt-1");
let option2=document.querySelector("#opt-2");
let option3=document.querySelector("#opt-3");
let option4=document.querySelector("#opt-4");
let options=document.querySelectorAll(".options");
let score=document.querySelector(".score");
let play=document.querySelector(".play-btn");


let index=0;
let sum=0;

      question.innerHTML=Quizz[0].q;
      option1.innerHTML=Quizz[0].a;
      option2.innerHTML=Quizz[0].b;
      option3.innerHTML=Quizz[0].c;
      option4.innerHTML=Quizz[0].d;
    

      function checkAns(){
        let ans;

        options.forEach((current)=>{
            if(current.checked)
            {
                ans= current.id;
                console.log(ans);    
            }
        })
        return ans;

      }

      function diselect(){
        options.forEach((current)=>{
            current.checked=false;
        })
      }

next.addEventListener("click",function(){

    let checkedAns=checkAns();
    if(checkedAns==Quizz[index].ans)
    {
        sum++;
    }


    diselect();

    index++;

 
  
    if(index < Quizz.length){
        
      question.innerHTML=Quizz[index].q;
      option1.innerHTML=Quizz[index].a;
      option2.innerHTML=Quizz[index].b;
      option3.innerHTML=Quizz[index].c;
      option4.innerHTML=Quizz[index].d;

    }

    else{
    score.innerHTML=`Total score ${sum}/${Quizz.length}`;
    
      play.style.display="block";

    }

    play.addEventListener("click",function(){
        next();
    })

    
        

  
})

