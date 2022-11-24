// FUNCȚII

// function suma(a, b, c = 1) {
//   let suma = a + b + c;
//   // console.log(suma);
//   return suma;
// }

// // console.log('suma = ' + suma(4,9));

// // funcție care să identifice numerele pare dintr-un array
// let numere = [3, 2, 5, 30, 6, 55, 17, 7, 8, 9, 4, 13];

// function par(nr) {
//   if (nr % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// for (const nr of numere) {
//   if (par(nr)) {
//     console.log("Numărul " + nr + " este par.");
//   }
// }

// // OBIECTE

// // let obj = {
// //     prop1 : 'valoare',
// //     prop2 : 2,
// //     prop3 : true
// // }

// let person = {
//   name: "John",
//   age: 30,
//   adress: "Cluj-Napoca",
// };

// person["age"] = 10;
// person.name = "Maria";
// console.log(person);

// // DOM

const titlu = document.getElementById("prim"); // returnează un SINGUR obiect
titlu.innerHTML = "DOM";

const paragrafe = document.getElementsByTagName("p"); // returnează un ARRAY
for (const par of paragrafe) {
  par.innerHTML = "Altceva ... ";
}

const clase = document.getElementsByClassName("impar"); // returnează un ARRAY
for (const par of clase) {
  par.innerHTML = "Paragraf impar ... ";
}

// // querySelector

// // const impar = document.querySelector('.impar'); // returnează PRIMUL obiect de acest fel
// // impar.innerHTML = 'Paragraf impar ... querySELECTOR ';

function modifica() {
  const impar = document.querySelectorAll(".impar"); // returnează TOATE obiectele de acest fel
  for (const par of impar) {
    par.innerHTML = "Paragraf impar ... querySelectorAll";
    // par.style.color = 'red';
    par.classList.toggle("rosu");
    // par.classList.remove("rosu");
  }
}
