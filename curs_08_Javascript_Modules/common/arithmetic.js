import lodash from "lodash";

export const cars = [
  { id: 1, make: "Opel", model: "Astra" },
  { id: 2, make: "Volvo", model: "S80" },
  { id: 3, make: "VW", model: "Passat" },
];

export const add = function (a, b) {
  return a + b;
};

export const divide = function (a, b) {
  return a / b;
};

export const multiply = function (a, b) {
  return a * b;
};

export const calculateDifferenceBetweenArray = function (arr, values) {
  return lodash.difference(arr, values);
};

export * as myCustomExport from "lodash";
