// Cel Mai Mare Divizor Comun

function cmmdc() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML =
    "c.m.m.d.c. al numerelor " +
    num1 +
    " și " +
    num2 +
    " este " +
    greatestCommonDivisor(num1, num2);

  function greatestCommonDivisor(num1, num2) {
    if (num2) {
      return greatestCommonDivisor(num2, num1 % num2);
    } else {
      return Math.abs(num1);
    }
  }
}

// Cel Mai Mic Divizor Comun

function cmmmd() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML =
    "c.m.m.m.c. al numerelor " +
    num1 +
    " și " +
    num2 +
    " este " +
    leastCommonMultiple(num1, num2);

  function leastCommonMultiple(num1, num2) {
    let min = num1 > num2 ? num1 : num2;

    while (true) {
      if (min % num1 == 0 && min % num2 == 0) {
        return min;
      }
      min++;
    }
  }
}

// SEMAFOR

var day = prompt(
  "What hour is it? \n 6 AM to 18 AM is day \n 18 PM to 5 AM is night"
);

if (day >= 18 || day <= 5) {
  nightLight();
} else {
  dayLight();
}

// Day Light

function dayLight() {
  setTimeout(function () {
    dayTrafficLight();
  });
  var timer = setInterval(function () {
    dayTrafficLight();
  }, 7000);
}

function dayTrafficLight() {
  var redLight = document.getElementById("redLight");
  var greenLight = document.getElementById("greenLight");
  var yellowLight = document.getElementById("yellowLight");

  setTimeout(function () {
    redLight.style.opacity = 1;
    yellowLight.style.opacity = 0.5;
  }, 3000);
  setTimeout(function () {
    yellowLight.style.opacity = 1;
    redLight.style.opacity = 0.5;
  }, 5000);
  setTimeout(function () {
    greenLight.style.opacity = 1;
    yellowLight.style.opacity = 0.5;
  }, 7000);
  setTimeout(function () {
    yellowLight.style.opacity = 1;
    greenLight.style.opacity = 0.5;
  }, 9000);
}

// Night Light

function nightLight() {
  setTimeout(function () {
    nightTrafficLight();
  });
  var timer = setInterval(function () {
    nightTrafficLight();
  }, 5000);
}

function nightTrafficLight() {
  var yellowLight = document.getElementById("yellowLight");

  setTimeout(function () {
    yellowLight.style.opacity = 1;
  }, 500);
  setTimeout(function () {
    yellowLight.style.opacity = 0.5;
  }, 1500);
}
