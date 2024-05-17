
var listID=0;
function add(){
var result=document.getElementById("input");
result=result.value;
var list =document.getElementById("list");

list.innerHTML+= `<li id="list-${listID}"> ${result}</li>`
list.innerHTML+= `<button onclick="complete('list-${listID}')" class="compbtn">  completed </button>`;
listID++;

}



function complete(id){
 var list=document.getElementById(id);
 list.style.textDecoration="line-through";
}