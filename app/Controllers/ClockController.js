
function _drawMilitaryTime(){
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('clock').innerHTML =  h + ":" + m;
        setTimeout(_drawMilitaryTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
      }
export class ClockController{
    constructor(){
        _drawMilitaryTime()
    }
}