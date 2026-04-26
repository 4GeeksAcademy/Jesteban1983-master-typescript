"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function squareElements(arr) {
    // your code here
    let numCuad = arr.map(n => n ** 2);
    return numCuad;
}
let output = squareElements([1, 2, 3]);
console.log(output);
