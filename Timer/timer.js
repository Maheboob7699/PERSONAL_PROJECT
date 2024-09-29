let setTime =0;
let interval
timeValue = document.querySelector(".timeValue");
timeValue.innerText = setTime;

startBtn = document.querySelector(".startBtn");
stopBtn = document.querySelector(".stopBtn");
resetBtn = document.querySelector(".resetBtn");
setValueBtn = document.querySelector(".setValueBtn");
timerData = document.querySelector(".timerData");
clearBtn = document.querySelector(".clearBtn");



startBtn.addEventListener("click",function(){
interval = setInterval(function(){
timeValue.innerText= setTime++;
},1000)
})

stopBtn.addEventListener("click",function(){
clearInterval(interval);
})

resetBtn.addEventListener("click",function(){
setTime = 0;
timeValue.innerText = setTime;
clearInterval(interval);
})

setValueBtn.addEventListener("click",function(){
    timerDataStore = document.createElement("div");
    timerDataStore.className = "timerDataStore";
    timerDataStore.innerText = `Timer value is ${setTime-1}`
    timerData.append(timerDataStore)
})

clearBtn.addEventListener("click",function(){
    timerData.innerText = "";
    
    
})
