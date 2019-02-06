const body = document.querySelector('body');
const bodyHeight = window.innerHeight;
const bodyWidth = window.innerWidth;

const PIC_NUM = 21;

function randomNum(){
    const n = Math.random()*PIC_NUM+1;
    return Math.floor(n);
}

function paintBackground(picNum){
    const randomImg = new Image();
    randomImg.classList.add('bgImage');
    randomImg.onload = function(){
        console.log('loaded');
        body.appendChild(this);
    };
    randomImg.src = `img/${picNum}.jpg`;
}

function init(){
    const num = randomNum();
    paintBackground(num);
}
init();