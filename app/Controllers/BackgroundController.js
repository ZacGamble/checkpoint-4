import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _drawBackground(){
    document.body.style.backgroundImage = ProxyState.background.Template
    document.getElementById('artist').innerText = ProxyState.background.DetailsTemplate
}

async function _getBackground(){
    try {
          await backgroundService.getBackground()
   
    } catch (error) {
        window.Error("something went wrong :/")
    }
}


export class BackgroundController{
    constructor(){
        ProxyState.on('background', _drawBackground)
        _getBackground()
    }
}