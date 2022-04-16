import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _getBackground(){
     let template = ''
    // ProxyState.background.forEach(t => template)
    document.body.style.backgroundImage = `"url('${ProxyState.background}')"`
    console.log(template);
}
export class BackgroundController{
    constructor(){
        backgroundService.getBackground()
        _getBackground()
    }
}