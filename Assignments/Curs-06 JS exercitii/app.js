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

// Form Validation

const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const errorElement = document.getElementById('error');

form.addEventListener("submit", (e)=> {
    let messages=[];
    if(username.value.length <= 3) {
        messages.push("Name must be longer than 3")
    }
    if(password.value.length <= 1) {
        messages.push('Password must be longer than 1')
    }
    if(age.value <= 16) {
        messages.push('Age must be over 16')
    }
    if(email.value.indexOf(".ro") == -1) {
        messages.push('Email must have a Romanian domain\nExample:\'yourname@domain.ro\'')
    }
    if(messages.length > 0 ) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ")
}

})