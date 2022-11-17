var hobbies = ["Fitness","Music","Reading"];
const personal = {
    firstName : "Raphael",
    lastName : "Bunea",
    age : 23,
    phoneNumber :0760364088,
    genderMale :true,
    hobbies

}

console.log("One of my hobbies is " + hobbies[2]);

function personalData(name1,name2,age,hobby1,hobby2,hobby3)
{
    console.log("My name is " + name1 +" "+ name2 +", I am " + age +" and my hobbies are " + hobby1 +", "+ hobby2 +", " + "and " + hobby3)
}

personalData(personal['firstName'],personal['lastName'],personal['age'],hobbies[0] , hobbies[1] , hobbies[2])