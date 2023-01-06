// Console program 1

var age = prompt("How old are you?");
const d = new Date();

if (age > 16) {
  alert("You are eligible");
} else {
  alert(
    "You must be at least 16 years old. It seems you are " +
      (d.getFullYear() - (d.getFullYear() - age))
  );
}

// // Console program 2

var firstNumber = prompt("enter a number");
var secondNumber = prompt("enter a second number");
var s = prompt("enter one of the following simbols: *, /, +, -");

switch (s) {
  case "*":
    alert(Number(firstNumber) * Number(secondNumber));
    break;
  case "/":
    alert(Number(firstNumber) / Number(secondNumber));
    break;
  case "+":
    alert(Number(firstNumber) + Number(secondNumber));
    break;
  case "-":
    alert(Number(firstNumber) - Number(secondNumber));
    break;
}

// Console program 3

var names = prompt("What is your name");
var secondAge = prompt("How old are you?");
alert(
  "Hello " +
    names +
    " I'm only a console but, it's nice to meet you. I've heard you are " +
    secondAge +
    " of age, that means you were born in " +
    (d.getFullYear() - secondAge)
);
