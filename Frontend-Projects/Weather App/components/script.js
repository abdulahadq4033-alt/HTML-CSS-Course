const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city !== ""){

        getWeather(city);
        getForecast(city);

    }

});

cityInput.addEventListener("keypress", (event) => {

    if(event.key === "Enter"){

        const city = cityInput.value.trim();

        if(city !== ""){

            getWeather(city);
            getForecast(city);

        }

    }

});