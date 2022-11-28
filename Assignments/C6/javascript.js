var arr=[15,13,27,43,28,16,9,16,19,349,77,21,44,47,79,250,3165,9756,448,752,351,446,201,200,210,299];
let j;
let k=0;
let i;
//function which determines whether a number is prime or not
function isItPrime(a) {
    for(j=2;j<a/2;j++) {
        if(a%j==0) {
            //this variable increases when a number perfectly divides by a number other than 1 and the half of the number
            k++;
        }
        }
    if(k==0) {
        console.log(`${a} is a prime number`);
    } else {
        console.log(`${a} is not a prime number`);
    }
    k=0;
};
for(i=0;i<arr.length;i++) {
    isItPrime(arr[i])
}
var text="How are you, good sir?";
let vw=0;
var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var l=0;
function howManyVowels(string) {
    for(let l of string) {
        if(vowels.indexOf(l)!==-1) {
            vw++;
        }
    }
    console.log(`This string has ${vw} vowels`);
    vw=0;
}
howManyVowels(text);
function testName() {
    let name=document.getElementById("name").value
    if(name.length<3) {
        console.log("Numele tau trebuie sa contina cel putin trei caractere")
    }
}
testName();
