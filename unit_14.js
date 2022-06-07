const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "306b39f8d852f0fd9d50318857860877"
}

const logoText = document.querySelector('.logo-link__strong');


const cities =  {
    2643743 : "london",
    701824 : "Mariupol",
    1850147:"Tokyo",
    703448:"Kyiv",
    706369:"Khmelnytskyi",
}

document.addEventListener("DOMContentLoaded",  ()=>{
    selectedCountry();
})

const selectedCountry= () =>{
    const select = document.querySelector('#city');


    for (const city in cities){
        let option =  document.createElement("option");
        option.setAttribute( 'value', city);
        option.textContent = cities[city];
        select.append(option);
    }
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather)


}



function showWeather(data) {
    console.log(data)

    const cityWeather = document.querySelector('.city__weather');
    const tempWeather = document.querySelector('.temperature');
    const windWeather = document.querySelector('.wind');
    const pressureWeather = document.querySelector('.pressure');
    const temperatureGeneral = document.querySelector('.temperature-gen');
    const humidityWeather = document.querySelector('.humidity');
    document.querySelector('.temperature-gen').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    cityWeather.textContent = data.name;
    tempWeather.innerHTML = `${data.main.temp}&#8451;`;
    windWeather.innerHTML = `${data.wind.speed} M/s`;
    pressureWeather.innerHTML = `${data.main.pressure}hPa`;
    humidityWeather.innerHTML = `${data.main.humidity}%`;

    temperatureGeneral.innerHTML


}

getWeather();
document.querySelector('#city').onchange = getWeather;