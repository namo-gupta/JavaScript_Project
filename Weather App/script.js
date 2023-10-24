const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");


const API_KEY = "5cb7b8abeeae65a6a4de9f15ef0105f3";

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city !== ""){
        fetchWeather(city);
        cityInput.value = "";
    }
})

function fetchWeather(city){
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {displayWeather(data);
    })
    .catch(error => {
        console.error("Error fetching Weather data :", error);
        weatherInfo.innerHTML= "An error occured. Please try again. ";
    })
}

function displayWeather(data){
    const weatherDescripton = data.weather[0].description;
    const temperature = data.main.temp;
    const iconCode = data.weather[0].icon;


    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    weatherInfo.innerHTML = `
    <div>
    <h2>Weather in <span>${data.name}</span></h2>
    <p>Description : <span>${weatherDescripton}</span></p>
    <p>Temperature: <span>${temperature}</span></p>
    <img src="${iconUrl}" alt="Weather icon"/>
    </div>
    `
}