import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Weather } from "../Models/Weather.js"

function _drawWeather(){
    let template = ''
    const weatherArry = ProxyState.weather
    weatherArry.forEach(w => {
        template += ProxyState.fahrenheit ? w.Template : w.CelsiusTemplate})
    document.getElementById('weather').innerHTML = template
    // const weather = ProxyState.weather
    // document.getElementById('weather').innerHTML = weather.Template
}

export class WeatherController{
    constructor(){
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
        ProxyState.on('fahrenheit', _drawWeather)
        _drawWeather()
    }
   async getWeather(){
       try {
           await weatherService.getWeather()
       } catch (error) {
           window.Error('something went wrong :/')
       }

    }
    toggleTemp(){
        weatherService.toggleTemp()
    }
}


