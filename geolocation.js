
const COORDS = 'coords';


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoErr(){
    console.log('Can\'t access to Location');
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErr);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askCoords();
    }
}

function init (){
    loadCoords();
}

init();