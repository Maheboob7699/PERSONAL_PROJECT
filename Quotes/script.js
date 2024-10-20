const quotesArray = [
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { quote: "What we think, we become.", author: "Buddha" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" }
];

//  let storeArray = localStorage.setItem('quotesData',JSON.stringify(quotesArray));

// if (!localStorage.getItem('quotesData')) {
//     localStorage.setItem('quotesData', JSON.stringify(quotesArray));
// }

let localArray = JSON.parse(localStorage.getItem('quotesData'));


console.log(localArray.length);


let generateBtn  = document.querySelector(".generateBtn");
let quotesRender = document.querySelector(".quotesValue");
let authorRender = document.querySelector(".authorValue");

generateBtn.addEventListener("click",function(){
let index = Math.floor(Math.random() * localArray.length);
  console.log(index);
  quotesRender.innerHTML = localArray[index].quote;
  authorRender.innerHTML = localArray[index].author;
  
})





let addQuotes = document.querySelector(".addQuotes");
let quotesInput = document.querySelector("#quotesInput");
let authorInput = document.querySelector("#authorInput");

addQuotes.addEventListener("click",function(){
  const newQuotes =  JSON.parse(localStorage.getItem('quotesData'));
   newQuotes.push({
       quote:quotesInput.value,
      author:authorInput.value,
})
   console.log(newQuotes);
  

 localStorage.setItem('quotesData',JSON.stringify(newQuotes)); 
quotesInput.value = '';
authorInput.value = '';

   })

