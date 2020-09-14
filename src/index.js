function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
      }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
      }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return `${hours}:${minutes}`;
}

function displayTemperature(response) {
    let h1 = document.querySelector("#current-city");
    let currentTemp = Math.round(response.data.main.temp)
    let temperature = document.querySelector("#temperature");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind-speed");
    let feelsTemp = Math.round(response.data.main.feels_like);
    let feelsLike = document.querySelector("#feels-like");
    let date = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    h1.innerHTML = (response.data.name);
    temperature.innerHTML = (currentTemp);
    description.innerHTML = (response.data.weather[0].main);
    humidity.innerHTML = (response.data.main.humidity);
    wind.innerHTML = (response.data.wind.speed);
    feelsLike.innerHTML = (feelsTemp);
    date.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src", 
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}

function displayForecast(response) {
    let forecastElement = document.querySelector("#forecast");
    let forecast = response.data.list[0];

    forecastElement.innerHTML = `
    <div class="col-2">
    <h2> 
        ${formatHours(forecast.dt * 1000)}
    </h2>
    <img
    src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
    />
    <div class = "weather-forecast-temperature">
        <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
    </div>
    </div> 
    `;

    forecast = response.data.list[1];
     forecastElement.innerHTML += `
    <div class="col-2">
    <h2> 
        ${formatHours(forecast.dt * 1000)}
    </h2>
    <img
    src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
    />
    <div class = "weather-forecast-temperature">
        <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
    </div>
    </div> 
    `;

    forecast = response.data.list[2];
    forecastElement.innerHTML += `
   <div class="col-2">
   <h2> 
       ${formatHours(forecast.dt * 1000)}
   </h2>
   <img
   src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
   />
   <div class = "weather-forecast-temperature">
       <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
   </div>
   </div> 
   `;

   forecast = response.data.list[3];
   forecastElement.innerHTML += `
  <div class="col-2">
  <h2> 
      ${formatHours(forecast.dt * 1000)}
  </h2>
  <img
  src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
  />
  <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
  </div>
  </div> 
  `;

  forecast = response.data.list[4];
  forecastElement.innerHTML += `
 <div class="col-2">
 <h2> 
     ${formatHours(forecast.dt * 1000)}
 </h2>
 <img
 src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
 />
 <div class = "weather-forecast-temperature">
     <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
 </div>
 </div> 
 `;

 forecast = response.data.list[5];
 forecastElement.innerHTML += `
<div class="col-2">
<h2> 
    ${formatHours(forecast.dt * 1000)}
</h2>
<img
src ="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width = "40";
/>
<div class = "weather-forecast-temperature">
    <strong>${Math.round(forecast.main.temp_max)}°</strong>|${Math.round(forecast.main.temp_min)}°
</div>
</div> 
`;
}

function search(city) {
    let apiKey = "617eafff664cc7b609a6d20494a9e0cf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature); 

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(displayForecast);
}

function submit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    search(cityInput.value);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);