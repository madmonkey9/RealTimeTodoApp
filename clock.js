const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minuites = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerHTML =
        `${hours < 10 ? `0${hours}` : hours}:${
        minuites < 10 ? `0${minuites}` : minuites}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();