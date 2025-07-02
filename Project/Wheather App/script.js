const btn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const API_key = 'ad362a5ac1a724f4316c2740d938efc3'


async function fetchData(city) {
    try {
        cityName.value = '';
        console.log("City Name:", city);
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        let result = await res.json();
        // console.log(result)
        if (result.message) {
            document.getElementById(
                "secondDiv"
            ).innerHTML = `<h1>${city} ${result.message}</h1>`;
            return;
        }
        displayWeather(result);
    }catch (err) {
        console.log(err.message);
    }
}

async function fetchDataByCoordinates(lati, longi) {
    try {
        console.log(lati, longi);
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_key}`
        );
        let result = await res.json();
        console.log(result);
        if (result.message) {
            document.getElementById(
                "secondDiv"
            ).innerHTML = `<h1>${city} ${result.message}</h1>`;
        }
        displayWeather(result);
    } catch (err) {
        console.log(err.message);
    }
}

btn.addEventListener('click', () => {
    fetchData(cityName.value)
})

function displayWeather({name, main, wind, weather}) {
    let div = `
      <div id="weatherInfo">
        <p id="temp">${main.temp} Kelvin</p>
        <p class="desc">${weather[0].description}</p>
        <img src='https://openweathermap.org/img/w/${weather[0].icon}.png' id="weatherIcon">
        <p id="city">${name}</p>
        <div class="otherInfo">
          <div class="wind">
            <p>Wind</p>
            <p>${wind.speed} m/s</p>
          </div>
          <div class="wind">
            <p>Pressure</p>
            <p>${main.pressure} ma</p>
          </div>
          <div class="wind">
            <p>Humidity</p>
            <p>${main.humidity} %</p>
          </div>
        </div>
      </div>
    `;
    document.getElementById('secondDiv').innerHTML = div;
}


document.getElementById('currlck').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let leti = position.coords.latitude;
        let longi = position.coords.longitude;
        fetchDataByCoordinates(leti, longi);
    })
});