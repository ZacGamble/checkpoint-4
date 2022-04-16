import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService{
async getWeather(){
    const res = await sandboxApi.get('weather')
    const weatherData = new Weather(res.data)
    // console.log('my {New} weather object', weatherData);
    ProxyState.weather = [...ProxyState.weather, weatherData]
    // ProxyState.weather = res.data.map(weather => new Weather(weather))
    // console.log('weather array', ProxyState.weather);
    }
    toggleTemp(){
        ProxyState.fahrenheit = !ProxyState.fahrenheit
        console.log('weather toggle state', ProxyState.fahrenheit);
    }
}

export const weatherService = new WeatherService()