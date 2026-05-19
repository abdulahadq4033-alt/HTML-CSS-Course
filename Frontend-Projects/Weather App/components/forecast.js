const forecastApiKey = "96a710d56fd357c17c22b5fdc306a11e";

async function getForecast(city){

    const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${forecastApiKey}&units=metric`;

    try{

        const response = await fetch(forecastUrl);

        if(!response.ok){
            throw new Error("Forecast not found");
        }

        const data = await response.json();

        updateForecastUI(data);

    }
    catch(error){
        console.log(error);
    }

}

function updateForecastUI(data){

    const forecastContainer =
    document.getElementById("forecast-container");

    forecastContainer.innerHTML = "";

    const dailyForecasts =
    data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyForecasts.forEach(day => {

        const date =
        new Date(day.dt_txt);

        const dayName =
        date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const temp =
        Math.round(day.main.temp);

        const icon =
        day.weather[0].icon;

        const condition =
        day.weather[0].main;

        const forecastCard =
        document.createElement("div");

        forecastCard.classList.add("forecast-card");

        forecastCard.innerHTML = `
            <h3>${dayName}</h3>

            <img src=
            "https://openweathermap.org/img/wn/${icon}@2x.png">

            <p>${temp}°C</p>

            <p>${condition}</p>
        `;

        forecastContainer.appendChild(forecastCard);

    });

}