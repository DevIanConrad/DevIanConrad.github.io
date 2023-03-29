let weather = {
    "apiKey": "be49696027ed81630d1c0bb56a40843c",
    fetchWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main 
    const { speed } = data.wind
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".feelsLike").innerText = "Feels Like: " + feels_like + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener
("click", function () {
weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Denver");

function changebg(){

    const images = [
        'url("bg/1.jpg")',
        'url("bg/2.jpg")',
        'url("bg/3.jpg")',
        'url("bg/4.jpg")',
        'url("bg/5.jpg")',
        'url("bg/6.jpg")',
        'url("bg/7.jpg")',

    ]

    const section = document.querySelector("body")
    const bg = images[Math.floor(Math.random()*
        images.length)]; 

    section.style.backgroundImage = bg;
}

setInterval(changebg, 8000)




