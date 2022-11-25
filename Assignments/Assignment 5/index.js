var hobbies = ["cooking", "reading", "music", "hiking", "listening to music"];
console.log(`One of my hobbies is: ${hobbies[0]}`);

var MyPersonalDetails = {
  firstname: "Narcisa",
  lastname: "Tomos",
  age: 22,
  phone: "0749154193",
  isFemale: true,
  city: "Cluj",
  country: "RO",
  hobbies: hobbies,
};

function sayaboutme(MyPersonalDetails) {
  return ` My name is ${MyPersonalDetails.firstname} ${MyPersonalDetails.lastname}, I am ${MyPersonalDetails.age} and my hobbies are ${hobbies} `;
}
