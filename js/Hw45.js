const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"

fetch(API_URL)
    .then((response) => {
        return response.json()
    })
    .then((data) =>{ 
        
        document.body.innerHTML += `
        <div class="wrp">
            <div class="">Місто:${data.name}</div>
            <div class="">Температура: ${Math.round(data.main.temp)}</div>
            <div class="">Тиск: ${data.main.pressure}</div>
            <div class="">Опис: ${data.weather[0].description}</div>
            <div class="">Вологість: ${data.main.humidity}</div>
            <div class="">Швидкість вітру: ${data.wind.speed}</div>
            <div class=""> Напрям у градусах: ${data.wind.deg}</div>
            <div class=""><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></div>

        </div>
        `;
     })
 