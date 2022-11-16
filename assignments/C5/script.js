let myHobbies = [
  "playing(drums, clarinet)/ litening to music",
  "football",
  "reading literature(history, politics, theology, sociology dinamics, fiziology",
  "podcasts",
  "hikeing",
  "follow politics",
  "calisthenics workout",
  "following neurochemestry science development",
];

// 1
myHobbies.forEach((hobby) => console.log(`One of my hobbies is: ${hobby}`));

// 2
let personalData = {
  firstName: "Dunca",
  name: "Bogdan",
  age: 23,
  phoneNumber: "0756785137",
  gender: "male",
  myHobbies,
};

const shortPresentaton = () => {
  console.log(
    `My name is ${personalData.name}, I have ${personalData.age} years old and few of my hobbies are ${personalData.myHobbies[0]}, ${personalData.myHobbies[1]} and ${personalData.myHobbies[2]}`
  );
};

// 3  call the function
shortPresentaton(personalData);
