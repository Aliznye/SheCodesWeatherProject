function displayTemperature(response) {
    console.log(response);
    let h1 = document.querySelector("#current-city");
    h1.innerHTML = (response.data.name);
    let currentTemp = Math.round(response.data.main.temp)
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = (currentTemp);
    let description = document.querySelector("#description");
    description.innerHTML = (response.data.weather[0].main);
    let precepitation = document.querySelector("#precipitation");
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = (response.data.main.humidity);
    let wind = document.querySelector("#wind-speed");
    wind.innerHTML = (response.data.wind.speed);
    let feelsTemp = Math.round(response.data.main.feels_like);
    let feelsLike = document.querySelector("#feels-like");
    feelsLike.innerHTML = (feelsTemp);
}

let apiKey = "617eafff664cc7b609a6d20494a9e0cf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;


axios.get(apiUrl).then(displayTemperature);