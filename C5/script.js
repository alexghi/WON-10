var myHobby = ['alergat', 'sport', 'hiking', 'catarat'];

for (let numeHobby of myHobby ){
    console.log(`Unul din hobby-urile mele este ${numeHobby}`)
}

var _infoPers={
    firstName:"Gherman",
    lastName:"Emanuel",
    age: 32,
    phone: 0756451762,
    hobby: ["alergat", "sport", "hiking"]
}

function myInfo(infoPers) {
    return `Numele meu este ${infoPers.firstName} ${infoPers.lastName}, am ${infoPers.age} ani si printre hobby-urile mele se afla: ${infoPers.hobby}`;
}

console.log(myInfo(_infoPers))