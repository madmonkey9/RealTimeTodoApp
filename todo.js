const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

let toDos = [];

function saveToDoList(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// My Way to replaceToDo
// function replaceToDo(id){
//     console.log(id);
//     const newTodo=[];
//     toDos.forEach(function(todo){
//         if(todo.id!==parseInt(id)){
//             newTodo.push(todo);
//         }
//     });
//     toDos = newTodo;
//     saveToDoList();
//     console.log(toDos);
// }

function deleteToDo(btn){
    const delBtn = btn.target;
    const li = delBtn.parentNode;
    toDoList.removeChild(li);
    // My Way to replace ToDo
    // replaceToDo(li.id);
    const newToDoList = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = newToDoList;
    saveToDoList();
}

function addToDoList(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    const newId = toDos.length + 1;
    btn.addEventListener('click', deleteToDo);
    span.innerHTML = text;
    btn.innerHTML = "❌";
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDoList();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value="";
    addToDoList(currentValue);
}
function loadTodo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const parsedToDos = JSON.parse(loadedToDos);
    if(loadedToDos !== null){
        parsedToDos.forEach(function(a){
            addToDoList(a.text);
        });
    }
}
function init(){
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();