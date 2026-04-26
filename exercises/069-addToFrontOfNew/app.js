"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToFrontOfNew(arr, element) {
    // your code here
    let nuevo = [element];
    let x = arr;
    return nuevo.concat(x);
}
let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);
