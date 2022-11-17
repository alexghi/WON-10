// ------------------Part one -----------
var myHobby = ["reading", "watching movies", "working in the garden"];


function myHobbies() {

  for (let i = 0; i < myHobby.length; i++) {
    let hobby = myHobby[i];
    console.log(`Unul din hobby-urile mele este ${hobby}`);
  }

}


// ------------------Part two -----------
var myPersonalInfo = {
  firstname: "Borze",
  lastname: "Andrei",
  age: 24,
  phone: "071122223344",
  isMale: true,
  city: "Oradea",
  country: "RO",
  hobbies: ["reading", "watching movies", "working in the garden"]
};


function sayMyPersonalInfo() {
  console.log(` Numele meu este ${myPersonalInfo.firstname} ${myPersonalInfo.lastname}, am ${myPersonalInfo.age} ani si printre hobby-urile mele se afla: ${myPersonalInfo.hobbies}`);
}

