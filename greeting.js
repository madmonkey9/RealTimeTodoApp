const form = document.querySelector(".js-form");
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser";
const SHOWING_CN = "showingOn";

function saveName(name){
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event){
    const currentValue = input.value;
    event.preventDefault();
    console.log(currentValue);
    addGreeting(currentValue);
    saveName(currentValue);
}

function askName(){
    // greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function addGreeting(name){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML=`Hello ${name}`;
}

function loadName(){
    currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    }else{
        addGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();