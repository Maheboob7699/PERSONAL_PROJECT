

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
        ans:"ans4"
    }
    ,
    {
        q:"What is  React components ?",
        a:"Dynamic",
        b:"server side",
        c:"Samll Parts of code ",
        d:"Frontend",
        ans:"ans3"
    }


]

console.log(Quizz.length);

let next=document.querySelector(".next-btn");
let question=document.querySelector("h2");
let option1=document.querySelector("#opt-1");
let option2=document.querySelector("#opt-2");
let option3=document.querySelector("#opt-3");
let option4=document.querySelector("#opt-4");
let options=document.querySelectorAll(".options");
let score=document.querySelector(".score");
let inputs=document.querySelector(".inpt-container");
let play=document.querySelector(".play-btn");


let index=0;
let sum=0;



      question.innerHTML=Quizz[index].q;
      option1.innerHTML=Quizz[index].a;
      option2.innerHTML=Quizz[index].b;
      option3.innerHTML=Quizz[index].c;
      option4.innerHTML=Quizz[index].d;





      next.addEventListener("click",function(){
       
        function quizzAns(){

            let value;
            options.forEach((optionData)=>{
               if(optionData.checked)
               {
                value=optionData.id;
                // console.log(value);
               
               }

            })
            return value
        }

      
            let quizMain= quizzAns();
            //    console.log(quizMain);
    
                if(quizMain==Quizz[index].ans)
                {
                 sum ++;
                 console.log(sum);
                 
                }
    
        function diselect(){
            options.forEach((current)=>{
             current.checked=false;
             })
        }

        diselect();
  


     

       index++;

       if(index<Quizz.length)
       {
        question.innerHTML=Quizz[index].q;
        option1.innerHTML=Quizz[index].a;
        option2.innerHTML=Quizz[index].b;
        option3.innerHTML=Quizz[index].c;
        option4.innerHTML=Quizz[index].d;
       }

       else
       {
        score.textContent=`your score is ${sum}/${Quizz.length}`;
        play.style.display="block";
        next.style.display="none";
        question.style.display="none";
        option1.style.display="none";
        option2.style.display="none";
        option3.style.display="none";
        option4.style.display="none";
        inputs.style.display="none";
         

       }
       
      })


      play.addEventListener("click",function(){
        window.location.reload();
        
      })
    










//       function checkAns(){
//         let ans;

//         options.forEach((current)=>{
//             if(current.checked)
//             {
//                 ans= current.id;
//                 console.log(ans);    
//             }
//         })
//         return ans;

//       }

//       function diselect(){
//         options.forEach((current)=>{
//             current.checked=false;
//         })
//       }

// next.addEventListener("click",nextBtn);
// function nextBtn(){


//     let checkedAns=checkAns();

//     if(checkedAns==Quizz[index].ans)
//     {
//         sum++;
//         console.log(sum); 
//     }

//     index++;

//     diselect();

 
  
//     if(index <  Quizz.length){
        
//       question.innerHTML=Quizz[index].q;
//       option1.innerHTML=Quizz[index].a;
//       option2.innerHTML=Quizz[index].b;
//       option3.innerHTML=Quizz[index].c;
//       option4.innerHTML=Quizz[index].d;

//     }

//     else{
//     score.innerHTML=`Total score ${sum}/${Quizz.length}`;
//       play.style.display="block";

//     }
    
// }

// play.addEventListener("click",playBtn);
// function playBtn(){
 


// }
