const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here


}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML ="STOP"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className ="btn split"
  btnRightElement.innerHTML ="SPLIT"
  
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn start"
  btnLeftElement.innerHTML = "START"
  
}

function setResetBtn() {
  // ... your code goes here

  btnRightElement.className = "btn reset"
  btnRightElement.innerHTML = "RESET";

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 
 if (btnLeftElement.innerHTML ==="START"){

 var inner= document.getElementsByClassName('.number');
 inner.innerText = chronometer.start(this.computeTwoDigitNumber)
  


}


  



 else{
   setResetBtn()
   setStartBtn() 
 }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  var li = document.createElement('li');

const split = document.getElementById('splits')

split.appendChild(li).innerText= chronometer.split();
split.classList.add("list-item");

console.log(split);

  
}

);
