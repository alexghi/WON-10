// 1 - Calculez media + dau rezultatul

let articol1 = [3, 2, 4, 5, 3, 4, 5, 5];
let articol2 = [3, 2, 4, 5, 5];
let articol3 = [3, 2, 4, 5, 3, 4, 5, 5, 5, 5, 5];

function calculator(item) {
  let sum = 0;

  for (const value of item) {
    sum += value;
  }
  console.log("Total sum was: " + sum);
}

calculator(articol1);
calculator(articol2);
calculator(articol3);

// 2 - Functie care determina un nr. prim

let x = prompt("Enter a number to see if it is prime or not!");

isPrime(x);

function isPrime(n) {
  if (n < 2) {
    return console.log(
      "Your number was " + n + " and it is not a prime number"
    );
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return console.log(
        "Your number was " + n + " and it is not a prime number"
      );
    }
  }
  return console.log("Your number was " + n + " and it is a prime number");
}

// 3 - Functie care sa determine si sa returneze numarul de vocale

let vocale =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad qui iure perferendis provident aut ut laudantium voluptas quisquam inventore alias labore pariatur vero, dolores quas culpa placeat fugit accusamus";

let textes = prompt(
  "Enter some text to see how many vowels there are in it! \n\nOut of words? \n\nUse this dummy text: \n\n " +
    vocale
);

let vowels = ["a", "e", "i", "o", "u"];

function countVowelsIterative(text) {
  let counter = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }

  console.log(`The text contains ${counter} vowel(s)`);

  return counter;
}

countVowelsIterative(textes);

// Validarea datelor dintr-un formular

function validateform() {
  const name = document.myform.name.value;
  const password = document.myform.password.value;
  const age = document.myform.age.value;
  const email = document.myform.email.value;

  if (name.length < 3) {
    alert("Name must be at least 3 characters long");
    return false;
  } else if (password.length < 1) {
    alert("Password must be at least 1 character long.");
    return false;
  } else if (age.value < 16) {
    alert("Age must be at least 16!");
    return false;
  } else if (!email.includes(".ro")) {
    alert("Please enter a valid e-mail address that containts .ro ");
    return false;
  }
}
