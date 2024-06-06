const InputBox = document.getElementById("input-box");
const ListCont = document.getElementById("list-cont");

function AddTask(){
    if (InputBox.value === ""){
        alert("Enter your Task!!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = InputBox.value;
        ListCont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    saveData();
}

ListCont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},
false);

function saveData(){
    localStorage.setItem("data",ListCont.innerHTML);
}

function showTask(){
    ListCont.innerHTML = localStorage.getItem("data");
}
showTask();