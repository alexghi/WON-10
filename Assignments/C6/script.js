let articol1 = [3, 2, 4, 5, 3, 4, 5, 5];
let articol2 = [3, 2, 4, 5, 5];
let articol3 = [3, 2, 4, 5, 3, 4, 5, 5, 5, 5, 5];

let s1 = 0;
for (let i in articol1){
    s1 += articol1[i];
}

let s2 = 0;
for (let j in articol2){
    s2 += articol2[j];
}

let s3 = 0;
for (let k in articol3){
    s3 += articol3[k];
}

let s = s1 + s2 + s3;
let average = s/3;
console.log(`The average is: ${average}`);

let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

array.forEach(myFunction);

function myFunction(m){
    let prime = 0;
    for (let n = 2; n < m; n++)
        if (m % n == 0){
            prime = 1;
            break;
        }
    if(m > 1 && prime == 0){
        console.log(m);
    }    
    
}

let number = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (number > 1) {

    for (let l = 2; l < number; l++) {
        if (number % l == 0) {
            isPrime = false;
            break;
        }
}
    
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let nrVowel = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            nrVowel++;
        }
    }

    return nrVowel
}

let string = prompt('Enter a string: ');

if(countVowel(string) === 1){
    console.log(`The string has ${countVowel(string)} vowel`);
}else{
    console.log(`The string has ${countVowel(string)} vowels`);
}

function checkForm(){
    var name = document.getElementById("name");
    if(name.value.length >= 3){}
    else{
        alert("The name must have at least 3 characters")
    }

    var age = document.getElementById("age");
    if(age.value >= 16){
    }
    else{
        alert("Age must be at least 16");
    }
}