import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

export class WeatherController{
    constructor(){
        this.getWeather()
    }
    getWeather(){
        weatherService.getWeather()

    }
}


