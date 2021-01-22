const key = 'fc3f59370087cb104c5a5bc90f9d14b7';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

// variaveis para guardar dia/mes/hora/minutos
const timeDay = new Date()
const day = timeDay.getDate()
const month = (timeDay.getMonth() + 1)
const year = timeDay.getFullYear()
const hours = timeDay.getHours()
const minutes = timeDay.getMinutes()
const HourMinutes = `${hours}:${minutes}`
const dayMonthYear = `${day}/${month}/${year}`

// definindo função para o querySelector
let getElement = element => document.querySelector(element)

// pegando valores para mudar com script depois
let     temperatura = getElement('.container h1'),
        weather = getElement('i .sun'),
        city = getElement('.city').innerText,
        dayHour = getElement('.dayHour');


// variavel de ambiente para guardar o valor da temperatura da API
 var temp;

// functionar a aplicação, desde pegar dados da API até startar APP
function requestWeather(url, city, key) {
    fetch(`${url + city}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            temp = data.main.temp
        })
        .catch(err => console.log(err))
}

const startApp = ()=> {
    requestWeather(baseURL, city, key)

    setTimeout(function() {
        temperatura.innerText = `${(temp - 273.15).toFixed(1)}°` // transformando kelvin em celcius
        dayHour.innerText = `${dayHour.innerText.split(' ')[0].innerText = dayMonthYear} ${HourMinutes}`
    }, 2000)

}
startApp()