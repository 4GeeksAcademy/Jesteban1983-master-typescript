"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeSumOfAllElements(arr, arg2) {
    // your code here
    let suma = arr.reduce((a, b) => a + b, 0);
    return suma;
}
let output = computeSumOfAllElements([1, 2, 3]);
console.log(output);
