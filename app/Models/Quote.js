export class Quote{
    constructor(data){
    this.content = data.content 
    this.author = data.author
    }
    get Template(){
        return `<h3>Quote of the day:</h3><span>"${this.content}"</span><br><span class="on-hover">- ${this.author}</span>`
                
    }
}