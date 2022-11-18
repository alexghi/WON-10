var myHobbies = [`reading`, `tech`, `biking`]

for(let myHobby of myHobbies){
    console.log(`Unul din hobby-urile mele este ${myHobby}`)
}

var personalData = {
    lastname: `Marge`,
    firstname: `Cosmin`,
    age: 23,
    gender: `male`,
    hobby1: `reading`,
    hobby2: `tech`,
    hobby3: `biking`,
};

function aboutMe(lastName, firstName, age, hobby1, hobby2, hobby3) {
    var lastName = `Marge`;
    var firstName = `Cosmin`;
    var age = 23;
    var hobby1 = `reading`;
    var hobby2 = `tech`;
    var hobby3 = `biking`;
    return `Numele meu este ${lastName} ${firstName}, am ${age} ani si printre hobby-urile mele se afla: ${hobby1}, ${hobby2} si ${hobby3}`
} 
