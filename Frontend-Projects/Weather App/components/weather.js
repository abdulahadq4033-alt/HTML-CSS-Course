const apiKey = "YOUR API KEY";

async function getWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();

        updateWeatherUI(data);
    }
    catch(error){
        alert(error.message);
    }
}

function updateWeatherUI(data){

    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");
    const weatherIcon = document.getElementById("weather-icon");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind-speed");

    cityName.innerText = data.name;
    temperature.innerText =
        `${Math.round(data.main.temp)}°C`;

    condition.innerText =
        data.weather[0].main;
    humidity.innerText =
        `Humidity: ${data.main.humidity}%`;

    wind.innerText =
        `Wind: ${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}