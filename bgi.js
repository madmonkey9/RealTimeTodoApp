const body = document.querySelector('body');
const bodyHeight = window.innerHeight;
const bodyWidth = window.innerWidth;

function paintBackground(){
    const randomImg = new Image();
    randomImg.src = 'https://source.unsplash.com/random/?landscape';
    randomImg.classList.add('bgImage');
    body.appendChild(randomImg);
    randomImg.addEventListener('loadend',function(e){
        console.log('finished img loading');
    });
}

function init(){
    paintBackground();
}
init();