class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId = null;
  }

  start(callback) {
    
  this.intervalId =  setInterval(() => {
    this.currentTime += 1;
if(callback)callback()

} ,1000)
  }

  getMinutes() {
    // ... your code goes here

return Math.floor(this.currentTime /60)

  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // twoDigit = this.getMinutes + this.getSeconds
    // if(twoDigit.length <= 2 ){
    //   twoDigit
    // } else{
    //   return 
    // }
var twoDigit = value + "";
if (twoDigit.length < 2) {
  return "0" + twoDigit
}else  {
  return twoDigit
}
    }
    
  

  stop() {
    
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  this.currentTime =0;
 }

  split() {
    // ... your code goes here
    return `${ this.computeTwoDigitNumber (this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`
  }
  }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
