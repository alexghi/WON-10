// SECTION 1 SCRIPT

function cmMdcTester() {
  const firstNum = document.getElementById("firstNumInput").value;
  const secondNum = document.getElementById("secondNumInput").value;
  let cmMdcResult = document.getElementById("cmMdcResult");
  let cmMdc;

  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if (firstNum % i == 0 && secondNum % i == 0) {
      cmMdc = i;
    }
  }
  cmMdcResult.textContent = `Cel mai mare divizor comun al numerelor ${firstNum} si ${secondNum} este ${cmMdc}`;
}

function cmmmcTester() {
  const firstNum = document.getElementById("firstNumInput").value;
  const secondNum = document.getElementById("secondNumInput").value;
  let cmmmcResult = document.getElementById("cmmmcResult");
  let cmmmc;
  let cmMdc;

  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if (firstNum % i == 0 && secondNum % i == 0) {
      cmMdc = i;
    }
  }
  cmmmc = (firstNum * secondNum) / cmMdc;
  cmmmcResult.textContent = `Cel mai mare divizor comun al numerelor ${firstNum} si ${secondNum} este ${cmmmc}`;
}

// SECTION 2 SCRIPT

// STORE TRAFFIC LIGHT COLORS INTO VARs
let redLight = document.getElementById("redON");
let yellowLight = document.getElementById("yellowON");
let greenLight = document.getElementById("greenON");

// TIMER DIV
let timerValue = document.getElementById("timer");

// INTERVALS
let trafficLight_Timer;
let trafficLight_Night_Timer;

// TIMERS
let timer = 14;
let timerNight = 2;

function trafficLight_Day() {
    clearInterval(trafficLight_Timer); // IN CASE OF MULTIPLE PRESSES ON THE SAME BUTTON
    clearInterval(trafficLight_Night_Timer); // CLEAR NIGHT TIMER
    timerNight = 2; // RESET NIGHT TIMER

    trafficLight_Timer = setInterval(function () {

    // RED LIGHT - 5 seconds    |
    // YELLOW LIGHT - 2 seconds | ===> timer = 14
    // GREEN LIGHT - 5 seconds  |
    // YELLOW LIGHT - 2 seconds |

    if (timer >= 9) {
      redLight.style.filter = "brightness(100%)";
      yellowLight.style.filter = "brightness(20%)";
      greenLight.style.filter = "brightness(20%)";

      timerValue.innerHTML = timer - 9; // RED LIGHT TIMER STARTS AT 5
    }
    if (timer < 9 && timer > 7) {
      redLight.style.filter = "brightness(20%)";
      yellowLight.style.filter = "brightness(100%)";
      greenLight.style.filter = "brightness(20%)";

      timerValue.innerHTML = "";
    }
    if (timer <= 7 && timer >= 2) {
      redLight.style.filter = "brightness(20%)";
      yellowLight.style.filter = "brightness(20%)";
      greenLight.style.filter = "brightness(100%)";

      timerValue.innerHTML = timer - 2; // GREEN LIGHT TIMER STARTS AT 5
    }
    if (timer < 2) {
      redLight.style.filter = "brightness(20%)";
      yellowLight.style.filter = "brightness(100%)";
      greenLight.style.filter = "brightness(20%)";

      timerValue.innerHTML = "";
    }

    timer -= 1;

    // RESET DAY TIMER 
    if (timer == 0) {
      timer = 14;
    }
  }, 1000);
}



function trafficLight_Night() {
    clearInterval(trafficLight_Night_Timer); // IN CASE OF MULTIPLE PRESSES ON THE SAME BUTTON
    clearInterval(trafficLight_Timer); // CLEAR DAY TIMER
    timer = 14; // RESET DAY TIMER

    trafficLight_Night_Timer = setInterval(function () {
    redLight.style.filter = "brightness(20%)";
    yellowLight.style.filter = "brightness(20%)";
    greenLight.style.filter = "brightness(20%)";
    timerValue.innerHTML = "";

    if (timerNight == 2) { // EACH 2 SECONDS
      yellowLight.style.filter = "brightness(100%)";
    }

    timerNight -= 1;

    // RESET NIGHT TIMER
    if (timerNight == 0) {
      timerNight = 2;
    }
  }, 1000);
}
