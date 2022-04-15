export class Quote{
    constructor(data){
    this.content = data.content 
    this.author = data.author
    }
    get Template(){
        return `<span>${this.content}</span>
                <span class="on-hover">${this.author}</span>`
    }
}