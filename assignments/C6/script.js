// 1
const primeNumbers = (num) => {
  for (let i = 2, sq = Math.floor(Math.sqrt(num)); i <= sq; i++)
    if (num % i === 0) return false;
  return num > 1;
};

let numbersArray = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

console.log(numbersArray.map((number) => primeNumbers(number)));

// 2

let checkVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let strLetters = str.toLowerCase().split("");
  for (let i = 0; i < strLetters.length; i++) {
    vowels.includes(strLetters[i]) ? count++ : count;
  }

  return count;
};

console.log(checkVowels("AICISEsta"));

// 3

// labelForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const value = labelForm.querySelector("input[type=text]").value;
//   console.log(value);
// });

// function validate() {
//   if ()
// }

function validateform() {
  const name = document.myForm.name.value;
  const password = document.myForm.password.value;
  const age = document.myForm.age.value;
  const email = document.email.value;

  if (checkUsername(name) === false) {
    return alert("enter username");
    name.focus();
  }
  if (checkPassword(password) === false) return alert("enter password");
  if (checkAge(age) === false) return alert("enter age");
  if (checkEmail(email) === false) return alert("enter email");
}

let checkUsername = (str) => {
  let name = str.toLowerCase();
  name.length >= 3 ? true : false;
};

let checkPassword = (str) => {
  psw = str.toLowerCase();
  psw.includes(number) ? true : false;
};

let checkAge = (age) => {
  age >= 16 ? true : false;
};

let checkEmail = (em) => {
  em.toLowerCase().includes(".ro") ? true : false;
};
