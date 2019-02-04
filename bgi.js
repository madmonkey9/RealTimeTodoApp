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
    randomImg.src = `/img/${picNum}.jpg`;
    randomImg.classList.add('bgImage');
    body.appendChild(randomImg);
}

function init(){
    const num = randomNum();
    paintBackground(num);
}
init();