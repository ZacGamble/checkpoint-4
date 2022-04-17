export class Quote{
    constructor(data){
    this.content = data.content 
    this.author = data.author
    }
    get Template(){
        return `<div class="rounded bg-dark text-light shadow p-2"><h3>Quote of the day:</h3><span>"${this.content}"</span><br><span class="on-hover">- ${this.author}</span>
        </div>`
                
    }
}