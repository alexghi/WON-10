//Exercitiul 1

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,60, 61, 62]

function prim(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if (num % i == 0) {
            prime= false;
            break;
        }
    }
    return prime;
}

for (const num of numbers) {
    if ( prim (num)) {
        console.log ("Numarul" + " " + num + " " + "este prim" );

    }
}


// Exercitiul 2 

const vowels = ["a", "e", "i", "o", "u", "ă", "î"];

function countVowel(str) {

    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    
    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


