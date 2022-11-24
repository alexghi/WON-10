// 1. Prim

let arrayOfNumebers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119];

function prim(nr) {

  let nrDiv = 0;

  for (d = 2; d <= nr / 2; d++) {
    if (nr % d == 0)
      nrDiv++;
  }

  if (nrDiv == 0 && nr >= 2)
    return true;
  else {
    return false;
  }
}

for (const nr of arrayOfNumebers) {
  if (prim(nr)) {
    console.log("Numărul " + nr + " este prim.");
  }
}

// 2. Numar vocale

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log('Numarul de vocale: ' + result );
alert('Numarul de vocale din cuvantul inserat este: ' + result );

function countVowel(str) {
  let count = 0;

  for (let letter of str) {
      if (vowels.includes(letter)) {
          count++;
      }
  }
  return count;
}

// 3.. Formular


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function verificare() {
  const name = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  if (nrCaracters(name) == false) {
    alert('Username must be at least 3 characters long');
    uname.focus();
  }

  if (containsNumber(password) == false) {
    alert('The password must contain at least a number');
    uname.focus();
  }

  if (checkAge(age) == false) {
    alert('You must be at least 16 years old to submit');
    uname.focus();
  }

  if (checkEmail(email) == false) {
    alert('The e-mail must be on a .ro domain');
    uname.focus();
  }
}

function nrCaracters(uname) {

  if (uname.length >= 3)
    return true;
  else
    return false;
}

function containsNumber(str) {
  return /[0-9]/.test(str);
}

function checkAge(age) {
  if (age >= 16)
    return true;
  else
    return false;
}

function checkEmail(email) {
  if (email.includes(".ro"))
    return true;
  else
    return false;
}