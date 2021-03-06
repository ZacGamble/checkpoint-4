
export class Weather{
    constructor(data){
        this.main = Math.floor(((data.main.temp-273.15)*1.8)+32)
        this.weather = data.weather[0].description
        this.name = data.name
        this.icon = data.weather[0].icon
    }
    get Template(){
        return `  <div onclick="app.weatherController.toggleTemp()" 
        class="d-flex flex-column text-light text p-1 rounded selectable fw-bold" title="click to toggle UoM">
        <div class="fs-2 border-bottom text"><img src="https://openweathermap.org/img/wn/${this.icon}@2x.png"/>${this.main} °F 
        </div>
        <div class="fs-5 text">${this.weather}</div>
        <div class="fs-5 text">${this.name}</div>
        </div>`
    }
    get CelsiusTemplate(){
        return `  <div onclick="app.weatherController.toggleTemp()" 
        class="d-flex flex-column text text-light shadow p-1 rounded selectable fw-bold" title="click to toggle UoM">
        <div class="fs-2 border-bottom text"><img src="https://openweathermap.org/img/wn/${this.icon}@2x.png"/>${Math.floor((this.main-32)/1.8)} °C </div>
        <div class="fs-5 text">${this.weather}</div>
        <div class="fs-5 text">${this.name}</div>
        </div>`
    }
}