let clock = document.getElementsByClassName('clock')[0]
let minuteMarks = document.getElementsByClassName('minuteMarks')

for (let i=0;i<60;i++) {
  clock.innerHTML += '<div class=minuteMarks></div>'
  minuteMarks[i].style.transform = `rotate(${6 * i}deg)`
}

let clockUp
let clockTim

function clockUpdate() {

  clearInterval(clockTim) // RESET TIMER
  timerOutput.innerHTML = "" // RESET TIMER OUTPUT
  document.getElementById('numberInputHour').value = "00" //   |
  document.getElementById('numberInputMinute').value = "00" // | -> RESET INPUTS
  document.getElementById('numberInputSecond').value = "00" // |

// CLOCK UPDATE INTERVAL
  clockUp = setInterval(function() {

// GET CURRENT DATE
  date = new Date()
  hour = date.getHours()
  minute = date.getMinutes()
  second = date.getSeconds()

// GET HOUR, MINUTE, SECOND HANDS
  hourHand = document.querySelector('.hourHand')
  minuteHand = document.querySelector('.minuteHand')
  secondHand = document.querySelector('.secondHand')

// CALCULATE DEGREES
  hourDeg = hour * 30 + minute * (360/720)
  minuteDeg = minute * 6 + second * (360/3600)
  secondDeg = second * 6

// ROTATE HANDS TO CORRESPONDING DEGREES
  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  secondHand.style.transform = `rotate(${secondDeg}deg)`
}, 1000)
}
clockUpdate()



  // TIMER FUNCTION
function clockTimer() {
  clearInterval(clockTim) // RESET TIMER IF MULTIPLE PRESSES
  clearInterval(clockUp) // RESET CLOCK

  hourHand.style.transform = `rotate(0deg)` //   |
  minuteHand.style.transform = `rotate(0deg)` // | -> RESET HANDS 
  secondHand.style.transform = `rotate(0deg)` // |

  // GET USER INPUT
  let numberInputHour = document.getElementById('numberInputHour').value
  let numberInputMinute = document.getElementById('numberInputMinute').value
  let numberInputSecond = document.getElementById('numberInputSecond').value

  let time = {
    hours: numberInputHour,
    minutes: numberInputMinute,
    seconds: numberInputSecond
  }
  
  let j=1

  // TIMER INTERVAL
  clockTim = setInterval(function() {
    time.seconds--;

    if (time.seconds < 0) {
      time.seconds = 59;
      time.minutes--;
    }

    if (time.minutes < 0) {
      time.minutes = 59;
      time.hours--;
    }

  // SECONDS HAND ROTATION
    if (time.seconds>=0){
      secondHand.style.transform = `rotate(${j * 6}deg)`
      j++;
    }
    
  // COUNTDOWN OUTPUT
    timerOutput.innerHTML = `${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds`;
  
    if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) {
      clearInterval(clockTim);
    }
  }, 1000);
}
  
  
