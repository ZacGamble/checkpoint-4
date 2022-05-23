export class Quote{
    constructor(data){
    this.content = data.content 
    this.author = data.author
    }
    get Template(){
        return `<div onclick="app.quoteController.getQuote()" class="rounded selectable poppin text-light p-2 fs-4 text" title="Click for new quote!"><h3>Quote of the day:</h3><span>"${this.content}"</span><br><span class="on-hover">- ${this.author}</span>
        </div>`
                
    }
}