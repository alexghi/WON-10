let dialLines = document.getElementsByClassName("diallines"),
  diallinesContainer = document.querySelector(".diallines-container"),
  dialLinesDecor1 = document.getElementsByClassName("diallinesDecor1"),
  dialLinesDecor2 = document.getElementsByClassName("diallinesDecor2"),
  clock = document.querySelector(".clock");

let displayClock = setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

for (let i = 1; i < 60; i++) {
  diallinesContainer.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

for (let i = 1; i <= 60; i++) {
  clock.innerHTML += "<div class='diallinesDecor1'></div>";
  dialLinesDecor1[i].style.transform = "rotate(" + 6 * i + "deg)";
}
for (let i = 1; i <= 60; i++) {
  clock.innerHTML += "<div class='diallinesDecor2'></div>";
  dialLinesDecor2[i].style.transform = "rotate(" + 6 * i + "deg)";
}

const tickWatch = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourAngle = (hours / 12) * 360 + 90;
  let minAngle = (minutes / 60) * 360 + 90;
  let secAngle = seconds * 6 + 90;

  document.getElementById("hour-hand").style.transform =
    "rotate(" + hourAngle + "deg)";
  document.getElementById("min-hand").style.transform =
    "rotate(" + minAngle + "deg)";
  document.getElementById("second-hand").style.transform =
    "rotate(" + secAngle + "deg)";
};

setInterval(tickWatch, 1000);
