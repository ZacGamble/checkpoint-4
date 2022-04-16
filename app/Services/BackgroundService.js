import { ProxyState } from "../AppState.js";
import { Background } from "../Models/Background.js";
import { sandboxApi } from "./AxiosService.js";

class BackgroundService{
 
    async getBackground(){
        const res = await sandboxApi.get('images')
        ProxyState.background = res.data
        console.log('get Backgrounds',res.data.largeImgUrl);        
    }
}

export const backgroundService = new BackgroundService()