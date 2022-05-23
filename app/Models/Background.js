
export class Background{
    constructor(data){
        this.img = data.img || data.largeImgUrl 
        this.artist = data.author
    }
    get Template() {
        return `url(${this.img})`
    }

    get DetailsTemplate(){
        return `
        Background photograph compliments of user "${this.artist}"
        `
    }
}