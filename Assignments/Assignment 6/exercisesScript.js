// Exercise 1
// let articol1 = [3, 2, 4, 5, 3, 4, 5, 5];
// let articol2 = [3, 2, 4, 5, 5];
// let articol3 = [3, 2, 4, 5, 3, 4, 5, 5, 5, 5, 5];

// calculez media + dau rezultatul

let articol1 = [3, 2, 4, 5, 3, 4, 5, 5];
let articol2 = [3, 2, 4, 5, 5];
let articol3 = [3, 2, 4, 5, 3, 4, 5, 5, 5, 5, 5];

// SOLUTION
// First array
sum1 = 0;
avg1 = 0;
for (let i of articol1) {
    sum1 = sum1 + i;
}
avg1=sum1/articol1.length;
console.log("Average of the first array is: " + avg1);

// Second array
sum2 = 0;
avg2 = 0;
for (let j of articol2) {
    sum2 = sum2 + j;
}
avg2=sum2/articol2.length;
console.log("Average of the second arrays is: " + avg2)

// Third array
sum3 = 0;
avg3 = 0;
for (let k of articol3) {
    sum3 = sum3 + k;
}
avg3=sum3/articol3.length;
console.log("Average of the third array is: " + avg3)

///////////////////////////////////////////////////////

// Exercise 2
// 1) Scrieti o functie JavaScript care sa determine daca un numar este 
// prim si folositi-o pentru a gasi toate numerele prime dintr-un array de numere naturale.

// Array to be tested

numbersArray = [8, 12, 14, 24, 27, 33, 36, 40, 41, 44, 49, 51, 52, 53, 55, 57, 62, 68, 90, 92, 93, 97, 104, 111, 114, 118, 132, 136, 137, 142, 143, 147, 150, 156, 159, 164, 165, 173, 176, 178, 179, 182, 185, 186, 187, 189, 190, 194, 195, 199]

testedNumbers = numbersArray // Copy of numbersArray from which non-prime numbers will be deleted.

function primeTester(...numbersArray) {
    for (var getNumber of numbersArray) {
        for (var divideBy = 2; divideBy < getNumber; divideBy++) {
            if (getNumber % divideBy == 0) {
                var index = testedNumbers.indexOf(getNumber)
                if (index >- 1) {
                    testedNumbers.splice(index, 1)
                }
            }
        }
    }
    console.log(testedNumbers) // Upon calling primeTester(...numbersArray) in console, it will show just the prime numbers from the array 
}

// 2) Scrieti o functie JavaScript care sa determine si sa returneze numarul de vocale dintr-un sir de caractere dat.

myString = "This is a dummy text"
vocale = ["a", "e", "i", "o", "u"]
numberOfChar = 0

function vocaleTester (myString) {
    for (var getCharacter of myString) {
        if (vocale.indexOf(getCharacter) !== -1) {
            console.log(getCharacter)
            numberOfChar++;
        }
    }
    console.log("Textul are " + numberOfChar + " vocale")
}

// 3) Scrieti codul JavaScript necesar pentru validatea datelor dintr-un formular in care exista patru campuri: Name, Password, Age, e-mail

function formValidation() {
    const nameBox = document.getElementById('nameBox').value;
    const passBox = document.getElementById('passBox').value;
    const ageBox = document.getElementById('ageBox').value;
    const emailBox = document.getElementById('emailBox').value;

    if (nameBox.length < 3) {
        alert("Name must have 3 or more characters")
    }

    if (/[0-9]/.test(passBox) == false) {
        alert("Password must contain 1 number")
    }

    if (ageBox < 16) {
        alert("You must be 16 or older")
    }

    if (emailBox.slice(-3) != ".ro") {
        alert("The e-mail address must have .ro domain")
    }
        
}
