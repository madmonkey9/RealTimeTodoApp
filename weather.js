const jsWeather = document.querySelector('.js-weather');

const API_KEY = secret.openWeatherAPIKey;
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const loc = json.name;
            const weather = json.weather[0].main;
            jsWeather.innerText = `${loc}, ${temperature}, ${weather}`;
        });
}

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
    getWeather(latitude, longitude);
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
    }else{
        const loadedLat = JSON.parse(loadedCoords).latitude;
        const loadedLon = JSON.parse(loadedCoords).longitude;
        getWeather(loadedLat, loadedLon);
    }
}

function init (){
    loadCoords();
}

init();