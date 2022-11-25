let numere = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,,54,40,56,70,60,67,80,97,76,87,88,89,11,12,13,14,15,
  16,17,18,19,20,21,23,25,27,28,30];

 function isPrime(nr) {
  if (nr % 2 == 0) {
    return true;
  } else {
    return false;
   }
}

for (const nr of numere) {
    if (isPrime(nr)) {
      console.log("Numarul " + nr + " este prim.");
   }
  }



function getVowels(string) {
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for(var i = 0; i < string.length ; i++) {
     if (Vowels.indexOf(string[i]) !== -1) {
        vowelsCount += 1;
    }
  }
return vowelsCount;
}
console.log("Numarul de vocale din propozitia -" +
" scrieti o functie javascript care sa determine si sa returneze numarul de vocale dintr-un sir de caractere dat. " 
+ getVowels("scrieti o functie javascript care sa determine si sa returneze numarul de vocale dintr-un sir de caractere dat."));

const name = document.getElementById('name');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit' , (e) => {
  let messages = [];

  if(name.value === '' || name.value == null){
    messages.push('Name is required')
  }

  if(name.value.length <= 3){
    messages.push('Name must be longer than 3 characters');
  } 

  if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
  }

 
})


var number = document.getElementById("number");
var myInput = document.getElementById("password");

myInput.onkeyup = function() {
  
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
 
}

function validateForm() {
	let valid = true;
  alert(valid ? "Over 16" : "Under 16");
  return valid
}

function validateBirthdate() {

	let currentDate = new Date();
	
	let input = document.getElementById("DOB").value;
	let birthdate = new Date(input);

	let diff = new Date(currentDate - birthdate)
	let age = Math.abs(diff.getUTCFullYear() - 1970);
	
	return age >= 16;
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@"\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

