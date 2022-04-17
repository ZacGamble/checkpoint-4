import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote(){
    // let template = ''
    // ProxyState.quote.forEach(q => template += q.Template)
    document.getElementById('quote').innerHTML = ProxyState.quote.Template

}
export class QuoteController{
    constructor(){
        ProxyState.on('quote', _drawQuote)
        quoteService.getQuote()
        // _drawQuote() Me tryna call some bulls*** (just use listener)
    }   

  async  getQuote(){
      await quoteService.getQuote()
    }
}