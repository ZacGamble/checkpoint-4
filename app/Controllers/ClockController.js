
function _drawMilitaryTime(){
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('clock').innerHTML =  h + ":" + m;
        setTimeout(_drawMilitaryTime, 1000);
        //Ternary to change greeting based on time of day
        h>0 && h<12 ? document.getElementById('greeting').innerText = 'Good morning!':
        h>12 && h<18 ? document.getElementById('greeting').innerText = 'Good afternoon!':
        document.getElementById('greeting').innerText = 'Good evening!'
      }
      
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i
        };  
        return i;
      }
export class ClockController{
    constructor(){
        _drawMilitaryTime()
    }
}