// HOBBYS

let hobbys = [`cititul`, `înotul`, `IT-ul`, `cântatul`];
for (let search of hobbys) {
  console.log(`Unul din hobby-urile mele este: ${search}`);
}

// PERSONAL DATA

let person = {
  firstName: `John`,
  lastName: `Smith`,
  age: 28,
  phoneNumber: `0383-1922-2942`,
  gender: `male`,
  hobbys: [`cititul`, `înotul`, `IT-ul`, `cântatul`],
};

// Function for Calling Person Details

function callPersonDetails() {
  console.log(`Numele meu este ${person.firstName} ${person.lastName}, am ${person.age} ani si
    printre hobby-urile mele se afla: ${person.hobbys[0]}, ${person.hobbys[1]} și ${person.hobbys[2]}`);
}

callPersonDetails();
