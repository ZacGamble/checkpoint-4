
export class Weather{
    constructor(data){
        this.main = Math.floor(((data.main.temp-273.15)*1.8)+32)
        this.weather = data.weather[0].description
        this.name = data.name
    }
    get Template(){
        return `  <div onclick="app.weatherController.toggleTemp()" 
        class="d-flex flex-column bg-dark text-light shadow p-3 rounded selectable" title="Weather">
        <div class="fs-2 border-bottom">${this.main} °F</div>
        <div class="fs-5 ">${this.weather}</div>
        <div class="fs-5">${this.name}</div>
        </div>`
    }
    get CelsiusTemplate(){
        return `  <div onclick="app.weatherController.toggleTemp()" 
        class="d-flex flex-column bg-dark text-light shadow p-3 rounded selectable" title="Weather">
        <div class="fs-2 border-bottom">${Math.floor((this.main-32)/1.8)} °C</div>
        <div class="fs-5 ">${this.weather}</div>
        <div class="fs-5">${this.name}</div>
        </div>`
    }
}