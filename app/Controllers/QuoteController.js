import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote(){
    let template = ''
    ProxyState.quote.forEach(q => template += q.Template)
    document.getElementById('quote').innerHTML = template
}
export class QuoteController{
    constructor(){
        ProxyState.on('quote', _drawQuote)
        quoteService.getQuote()
        _drawQuote()
    }   

  async  getQuote(){
      await quoteService.getQuote()
    }
}