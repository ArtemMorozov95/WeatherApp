let city = document.querySelector('.search__input')
let btn = document.querySelector(".search__btn")
let gorod = document.querySelector(".info__place")
let description = document.querySelector(".info__description")
let temp = document.querySelector(".temp")
let iconblock = document.createElement('img')
let imgblock = document.querySelector('.img')

let key = '3345394b48a0502bbc4000a3405accdd';

btn.addEventListener('click', function(){
    weather()
})

async function weather(){
    try{
        let cityInput = city.value
        let finalCity = cityInput.replace(" ", "%20");
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&units=metric&appid=${key}`;
        let resp = await fetch(url)
        let data = await resp.json()
        console.log(data)
        gorod.textContent = data.name
        description.textContent = data.weather[0].description
        temp.textContent = `${data.main.temp} °C`
        iconblock.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        imgblock.append(iconblock)
    } catch(err){
        alert('Город не найден')
    }

}


