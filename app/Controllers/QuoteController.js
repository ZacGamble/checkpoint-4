import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote(){
    let template = ''
    ProxyState.quote.forEach(q => template += `<span>${q.content}</span>
    <span class="on-hover">${q.author}</span>`)
    document.getElementById('quote').innerHTML = template
    console.log(template);
}
export class QuoteController{
    constructor(){
        ProxyState.on('quote', _drawQuote)
        this.getQuote
        _drawQuote
    }

    getQuote(){
        quoteService.getQuote()
        _drawQuote
    }
}