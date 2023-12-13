const addBox = document.getElementById("add-box");
const lista = document.getElementById("lista");

function addTarefa(){
    if (addBox.value === '') {
        alert("Digite uma tarefa.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = addBox.value;
        lista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addBox.value = "";
    saveData();
}

lista.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", lista.innerHTML);
}

function mostraTarefa() {
    lista.innerHTML = localStorage.getItem("data");
}

mostraTarefa();