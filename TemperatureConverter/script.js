let convertBtn = document.querySelector(".convertBtn");
let inputValue = document.querySelector("#inputValue");
let select = document.querySelector("#selectTemp");

let tempValue = document.querySelector(".tempValue");
let tempResult;


convertBtn.addEventListener("click", function () {



    let selectOption = select.value;

    if(inputValue.value ==""){
        alert("please fill the Input");
        return;
    }

    else if (selectOption === "celcius") {

        tempResult = (inputValue.value * 9 / 5) + 32;
        tempValue.innerHTML = `${tempResult} <sup>°F</sup>`
        inputValue.value="";



    }


    else if (selectOption === "farhenite") {
        tempResult = (inputValue.value - 32) * 5 / 9;
        tempValue.innerHTML = `${tempResult} <sup>°C</sup>`;
        inputValue.value="";


    }


}) 