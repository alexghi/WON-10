//Am ales sa fac fiecare exercitiu ca o functie separata actionata de onclick ca sa evit toate prompt-urile pe ecran unul dupa altul
function ageAndGoals() {
    var b = prompt("Where do you see yourself in 5 years?");
    var c = parseFloat(prompt("How old are you?"))
    var d = c+5;
    if (c < 16) {
        alert("You must be at least 16 years old. It seems you are " + c)
    }
    else if(c >= 16) {
        alert("You are eligible, congrats! When you will be " + d +` (in 5 years), you will be ${b}`);
    }
    if (isNaN(c)) {
        alert("Please enter a number");
        ageAndGoals();
    }
}
function myCalculator() {
    var a = prompt("Please enter a mathematical operator")
    var b = parseFloat(prompt("Please enter the first number"));
    var c = parseFloat(prompt("Please enter your second number"));
    if(isNaN(b)) {
        alert("Please enter a valid value")
        myCalculator();
    }
    if(isNaN(c)) {
        alert("Please enter a valid value")
        myCalculator();
    }
    if(a == "+") {
        alert(b+c);
    }
    else if(a == "-") {
        alert(b-c);
    }
    else if(a == "/") {
        alert(b/c);
    }
    else if(a == "*") {
        alert(b*c);
    }
    else if(a == "%") {
        alert(b%c);
    }
    else if(a !== "+" && a !== "-" && a !== "/" && a !== "*" && a !=="%") {
        alert("Please enter a valid operator");
        myCalculator();
    }
}
function nostradamus() {
    var a =prompt("What is your name?");
    var b =prompt("What is your age?");
    b =parseInt(b);
    d = new Date();
    var e = d.getFullYear() - b;
    console.log(e);
    alert (`Hello, ${a}. I am a mere console but it's a pleasure to meet you nonetheless. I've heard you are ${b} years old. That means you were born in ` + e);
}



