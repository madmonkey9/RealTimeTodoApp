const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

const toDos = [];

function saveToDoList(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function addToDoList(tdList){
    const li = document.createElement('li');
    const text = tdList;
    const span = document.createElement('span');
    const btn = document.createElement('button');
    const newId = toDos.length + 1;
    span.innerHTML = text;
    btn.innerHTML = "❌";
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: toDos.length+1
    }
    toDos.push(toDoObj);
    saveToDoList();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue);
    toDoInput.value="";
    addToDoList(currentValue);
    saveToDoList(currentValue);
}
function loadTodo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    
}
function init(){
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();