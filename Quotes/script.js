let quotes = [
    { 
        quote: "The only limit to our realization of tomorrow is our doubts of today.", 
        author: "-Franklin D. Roosevelt" 
    },

    { 
        quote: "Life is 10% what happens to us and 90% how we react to it", author: "-Charles R. Swindoll" 
    },

    { 
        quote: "The purpose of our lives is to be happy.", 
        author: "-Dalai Lama"
     },

    { 
        quote: "Get busy living or get busy dying.", 
        author: "-Stephen King"
     },

    { 
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
         author: "-Brian Tracy" 
    },

    { 
        quote: "Believe you can and you're halfway there.", 
        author: "-Theodore Roosevelt" 
    },

    { 
        quote: "The only way to do great work is to love what you do.", author: "-Steve Jobs"
     },

    { 
        quote: "In the end, we only regret the chances we didn't take.", author: "-Lewis Carroll"
     },

    { 
        quote: "Success is not the key to happiness. Happiness is the key to success.",
         author: "-Albert Schweitzer" 
    },

    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
         author: "-Ralph Waldo Emerson"
     }
];

// Store quotes in local storage as a JSON string
localStorage.setItem('quotes', JSON.stringify(quotes));
let localQuotes = JSON.parse(localStorage.getItem('quotes'));


let generateBtn = document.querySelector(".generateBtn");
let quotesBox = document.querySelector(".quotes");
let authorBox = document.querySelector(".author");
generateBtn.addEventListener("click",()=>generate())

function generate(){
  let index =  Math.floor(Math.random() * localQuotes.length);
  quotesBox.innerHTML= quotes[index].quote;
  authorBox.innerHTML = quotes[index].author;
    
}