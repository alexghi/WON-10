// Prime Number detection thingy

var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var prime=[];
function primeNumbers(num) {
    if(num<2) {
    return false
}

    for (i=2;i<num;i++){
        if(num % i === 0) {
            return false;
        }
        
    }
    return true
}

for(var index=0;index<number.length;index++) {
    if(primeNumbers(number[index])) {
        prime.push(number[index]);
    }
}
console.log(prime);



// Vowel detection function

let vowel = "aeiou" ;
let count = 0;

function vowelDetector(str) {
    for(i=0 ; i < str.length ; i++) {
       if (vowel.indexOf(str[i])>-1) {
        count++;
       }
    }
    
    return "The number of vowels in the string is " + count
}

console.log(vowelDetector('How many vowels are in this sentence?'));