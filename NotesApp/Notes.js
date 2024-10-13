let container  = document.querySelector(".note-container");
let note = document.querySelector("#note-logo");
let noteAdd = document.querySelector(".add-note");
let noteStore = document.querySelector(".note-store");
let addBtn = document.querySelector(".add-btn");
let textarea = document.querySelector("#texterea-data");
let DeleteBtn = document.querySelector("button");



note.addEventListener("click",function(){
noteAdd.style.display="block";
    
})


addBtn.addEventListener("click",function(){

    if(textarea.value == ""){
        alert("please write something");
        noteAdd.style.display="none";
        return;
    }

    else{
        
        let noteData = document.createElement("div");
        noteData.className="note-data";
        noteData.innerHTML=
                            ` <div>${textarea.value}</div>
                                <button>Delete</button>`
                            noteStore.append(noteData);
                            textarea.value = "";
                            noteAdd.style.display="none";
    
                            noteData.querySelector("button").addEventListener("click",function(){
                                noteData.remove();
                            })

    }
    
})