import { ProxyState } from "../AppState.js";
import { Background } from "../Models/Background.js";
import { sandboxApi } from "./AxiosService.js";

class BackgroundService{
        

            async getBackground(){
                
                const res = await sandboxApi.get('images')
                const backGround = new Background(res.data)
                ProxyState.background = backGround
                   
                // ProxyState.background = [...ProxyState.background, backGround]
        }
    }

export const backgroundService = new BackgroundService()