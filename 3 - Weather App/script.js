// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// API Key
// a961be43c5eaf836199bcc8492b33461

//Declare the api keys
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units =metric&q= ";
const apiKey = "a961be43c5eaf836199bcc8492b33461"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button ")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
         document.querySelector(".weather").style.display ="none"
    }

    else{
        var data = await response.json();
        console.log(data)
    
    
        //selecting all weather details
        const temp = document.querySelector(".temp");
        const cityname = document.querySelector(".cityname");
        const humidity = document.querySelector(".humidity");
        const wind = document.querySelector(".wind");
      
    
        cityname.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp) + "°c"
        humidity.innerHTML = data.main.humidity + "%"
        wind.innerHTML = data.wind.speed + "km/h"
    
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain1.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/sun1.webp"
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/snow.webp"
        }
    
        document.querySelector(".weather").style.display ="block"
        document.querySelector(".error").style.display ="none"
    
    }
    }
    
searchBtn.addEventListener("click", function () {
    checkweather(searchBox.value)
})



// clear mist drizzle clouds rain