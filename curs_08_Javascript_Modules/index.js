import {
  add as mySomethingAdd,
  divide,
  multiply,
  calculateDifferenceBetweenArray,
  cars,
} from "./common/arithmetic";

import { add as filesAdd } from "./common/files";

const myArray = [1, 2, 3, 4, 5, 6, 9, 10];

const compareValues = [5, 6, 7, 8];

console.log(
  "difference between arr",
  calculateDifferenceBetweenArray(myArray, compareValues)
);

const something = "Rezultatul adunarii este" + mySomethingAdd(12, 12);
const MMMM = "rezultatul impartirii este " + divide(24, 6);

console.log(something, MMMM);

cars.forEach(function (car) {
  document.getElementById(
    "cars"
  ).innerHTML += `<div>masina cu ID-ul ${car.id} este un ${car.make} ${car.model}</div>`;
});
