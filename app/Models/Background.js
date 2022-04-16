
export class Background{
    constructor(data){
        this.img = data.largeImgUrl || data.img
    }
    get Template() {
        return `
        "url('${this.img}')"
        `
    }
}