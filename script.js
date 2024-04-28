//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8addca5771mshdc31ca289d82d15p16c245jsnbf79caa2c768',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

const getWeatherForShanghai = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        // Populate the table with weather details
        document.getElementById('temp3').innerText = response.temp;
        document.getElementById('feels_like3').innerText = response.feels_like;
        document.getElementById('humidity3').innerText = response.humidity;
        document.getElementById('min_temp3').innerText = response.min_temp;
        document.getElementById('max_temp3').innerText = response.max_temp;
        document.getElementById('wind_speed3').innerText = response.wind_speed;
        document.getElementById('wind_degrees3').innerText = response.wind_degrees;
        document.getElementById('sunrise3').innerText = response.sunrise;
        document.getElementById('sunset3').innerText = response.sunset;
    })
    .catch(err => console.error(err));
};
const getWeatherForBoston = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        // Populate the table with weather details
        document.getElementById('temp4').innerText = response.temp;
        document.getElementById('feels_like4').innerText = response.feels_like;
        document.getElementById('humidity4').innerText = response.humidity;
        document.getElementById('min_temp4').innerText = response.min_temp;
        document.getElementById('max_temp4').innerText = response.max_temp;
        document.getElementById('wind_speed4').innerText = response.wind_speed;
        document.getElementById('wind_degrees4').innerText = response.wind_degrees;
        document.getElementById('sunrise4').innerText = response.sunrise;
        document.getElementById('sunset4').innerText = response.sunset;
    })
    .catch(err => console.error(err));
};
const getWeatherForNewYork = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        // Populate the table with weather details
        document.getElementById('temp5').innerText = response.temp;
        document.getElementById('feels_like5').innerText = response.feels_like;
        document.getElementById('humidity5').innerText = response.humidity;
        document.getElementById('min_temp5').innerText = response.min_temp;
        document.getElementById('max_temp5').innerText = response.max_temp;
        document.getElementById('wind_speed5').innerText = response.wind_speed;
        document.getElementById('wind_degrees5').innerText = response.wind_degrees;
        document.getElementById('sunrise5').innerText = response.sunrise;
        document.getElementById('sunset5').innerText = response.sunset;
    })
    .catch(err => console.error(err));
};
const getWeatherForRussia = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Russia', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        // Populate the table with weather details
        document.getElementById('temp6').innerText = response.temp;
        document.getElementById('feels_like6').innerText = response.feels_like;
        document.getElementById('humidity6').innerText = response.humidity;
        document.getElementById('min_temp6').innerText = response.min_temp;
        document.getElementById('max_temp6').innerText = response.max_temp;
        document.getElementById('wind_speed6').innerText = response.wind_speed;
        document.getElementById('wind_degrees6').innerText = response.wind_degrees;
        document.getElementById('sunrise6').innerText = response.sunrise;
        document.getElementById('sunset6').innerText = response.sunset;
    })
    .catch(err => console.error(err));
};
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const cityValue = city.value;
    getWeather(city.value)
})
getWeather("Delhi")
getWeatherForShanghai();
getWeatherForBoston();
getWeatherForNewYork();
getWeatherForRussia();

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData(); // Call the async function