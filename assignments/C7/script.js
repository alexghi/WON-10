let nr1 = document.getElementById("nr1"),
  nr2 = document.getElementById("nr2"),
  greatestCD = document.getElementById("gDiv"),
  lowestCD = document.getElementById("lDiv"),
  parZone = document.querySelector(".display-par");
let par = document.createElement("p");

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a / gcd(a, b)) * b;

const displayGCD = (a, b, c) => {
  parZone.appendChild(par);
  return (par.innerHTML = `Cel mai mare divizor comun al nr  ${a} si ${b} este ${c}.`);
};

const displayLCM = (a, b, c) => {
  parZone.appendChild(par);
  return (par.innerHTML = `Cel mai mic multiplu comun al nr  ${a} si ${b} este ${c}.`);
};

clearInputs = () => {
  console.log(nr1.value, nr2.value);
  nr1.value = "";
  nr2.value = "";
};

greatestCD.addEventListener("click", function (e) {
  e.preventDefault();
  displayGCD(nr1.value, nr2.value, gcd(nr1.value, nr2.value));
  clearInputs();
});

lowestCD.addEventListener("click", function (e) {
  e.preventDefault();
  displayLCM(nr1.value, nr2.value, lcm(nr1.value, nr2.value));
  clearInputs();
});

/////////////////////////////////////
// SEMAFOR -> REGIM ZI-NOAPTE

let zi = document.getElementById("zi"),
  noapte = document.getElementById("noapte"),
  galben = document.querySelector(".galben"),
  circles = document.querySelectorAll(".light");

const setNight = () => {
  circles[1].classList.toggle("galben");
};

const clearDayLights = () => {
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = "light";
    circles[i].classList.remove(circles[i].getAttribute("color"));
  }
};

let night;
const dayLights = () => {
  clearInterval(day);
  night = setInterval(() => {
    setDay();
  }, 1000);
};

let day;
const nightLights = () => {
  clearDayLights();
  clearInterval(night);
  day = setInterval(setNight, 1000);
};

let activeLight = 0;
function setDay() {
  circles[activeLight].className = "light";
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute("color"));
}

zi.addEventListener("click", dayLights);
noapte.addEventListener("click", nightLights);
