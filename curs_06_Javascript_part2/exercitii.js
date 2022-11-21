// let a = 3;
let b = 5;

// let c = "12.6"; // Number de tip float
// let d = "12"; // Number de tip int

// let rezultat = a + b;
// alert("Rezultatul  = " + rezultat);
// let answer = confirm("Vrei să înveți Js?");
// alert("Ai ales " + answer);
// let answer = prompt("Introdu numele:");
// alert("Ai introdus: " + answer);

a = 20;
// WIN: CTRL+SHIFT+J
// MAC: CMD+OPTION+J
// % = restul îmărțirii întregi
// let rezultat = a % b;

// a = a + b
// a++; // a = a + 1

// console.log("Rezultatul = " + a);

let sir1 = "un text"; // tip STRING
let sir2 = "alt text"; // tip STRING

// sir1 = 5; // tip NUMBER
// sir2 = 7; // tip NUMBER
// let fraza = sir1 + " " + sir2;

// console.log(fraza.length);

// const PI = 3.14;

// // PI = 4.7;

// // STRUCTURI CONDIȚIONALE
//      IF
let nr1 = "10"; // STRING
let nr2 = 10; // NUMBER

// // Operatorii pentru comparare:
// ==, ===, <, >, <=, >=, !=, !==
// DACA (conditia e adevarata / falsa) atunci tot ce este in bloc va fi executat
// if (conditie) {
//   block
// }

// if (nr1 > nr2) {
//   console.log(nr1 + " este mai MARE decât " + nr2);
// } else if (nr1 == nr2) {
//   console.log(nr1 + " este EGAL cu " + nr2);
// } else {
//   console.log(nr1 + " este mai MIC decât " + nr2);
// }

// let bec = true;
// // if(truthie) ... truthie = true, 'dfewef', 3434
// // falsie = 0, '', false

// if(bec) {
//   console.log('aaaa')

// }
// else {

// }

let authMethod = null;

switch (authMethod) {
  case "facebook":
    console.log("autentifica-ma cu FB");
    break;
  case "google":
    console.log("log me with google");
    break;
  case "twitter":
    console.log("twitter");
    break;
  default:
    console.log("user and pass simple");
    break;
}

//      SWITCH
// let expresie = "pear";

// switch (expresie) {
//   case "apple":
//     console.log("MĂR");
//     break;
//   case "peach":
//     console.log("PIERSICĂ");
//     break;
//   case "strawberry":
//     console.log("CĂPȘUNĂ");
//     break;
//   case "pear":
//     console.log("PARĂ");
//     break;
//   default:
//     console.log("SORRY ... NU ȘTIU ...");
//     break;
// }

// // STRUCTURI ITERATIVE/REPETITIVE

//          FOR

// for (let j = 0; j < 5; j++) {
//   console.log("executa-ma de atatea ori: " + j);
// }

var hobbies = [
  "something",
  "biking",
  "mountain",
  "reading",
  "swimming",
  "traveling",
];

// for (let j = 0; j <= hobbies.length - 1; j++) {
//   console.log("hobby ul meu este " + hobbies[j]);
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Contor = " + i);
// }

// // Variabile de tip ARRAY
// // indicele/poziția 0  1  2    3  4
let myArray = [1, -2, 3.14, 4.5, 7];
// for (let i = 0; i < myArray.length; i++) {
//   console.log("Pe poziția " + i + " este elementul = " + myArray[i]);
// }

// // ia pe rând toți indicii
// for (let i in myArray) {
//   console.log("Pe poziția " + i + " este elementul = " + myArray[i]);
// }
// // // ia pe rând toate VALORILE
// for (let val of myArray) {
//   console.log("Elementul  = " + val);
// }

//      WHILE
let i = 0;
while (i < 5) {
  console.log("Contor = " + i);
  i++;
}

// let j = 0;
// while (j < 19) {
//   console.log("Contor = " + j);
//   j++;
// }

//      DO WHILE
// i = 0;
// do {
//   console.log("Contor = " + i);
//   i++;
// } while (i < 5);

// // TEMA
// let articol1 = [3, 2, 4, 5, 3, 4, 5, 5];
// let articol2 = [3, 2, 4, 5, 5];
// let articol3 = [3, 2, 4, 5, 3, 4, 5, 5, 5, 5, 5];

// calculez media + dau rezultatul
