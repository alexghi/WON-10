var hobbies = ["Fitness","Music","Reading"];
var personal = {
    firstName : "Raphael",
    lastName : "Bunea",
    age : 23,
    phoneNumber :0760364088,
    genderMale :true,
    hobbies

}

console.log("One of my hobbies is " + hobbies[2]);

function personalData () {
    console.log(`My name is ${personal.firstName} ${personal.lastName} , I am ${personal.age} my hobbies include ${hobbies}`);
}

personalData () ;

