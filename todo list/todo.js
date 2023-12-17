const input=document.getElementById("input");
const ulTodo=document.getElementById("ulTodo");
function addTask(){
    if(input.value === ''){
        alert("Add something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        ulTodo.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value= "";
    saveData();
}
ulTodo.addEventListener("click",function(action){
    if(action.target.tagName ==="LI"){
        action.target.classList.toggle("checked");
    }
    else if(action.target.tagName === "SPAN"){
        action.target.parentElement.remove();
    }
    saveData();
    
},false);
 
input.addEventListener("keypress", function(event) {
   
    if (event.key === "Enter") {
      event.preventDefault();
      if(input.value === ''){
        alert("Add something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        ulTodo.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value= "";
    saveData();     
    }
  });

function saveData(){
    localStorage.setItem("data",ulTodo.innerHTML);
}
function showTask(){
    ulTodo.innerHTML=localStorage.getItem("data");
}
showTask();