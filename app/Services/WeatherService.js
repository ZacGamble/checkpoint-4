import { sandboxApi } from "./AxiosService.js";

class WeatherService{
getWeather(params={}){
    const res = sandboxApi.get('weather', params)
    console.log('weather', res.data);
}
}

export const weatherService = new WeatherService()