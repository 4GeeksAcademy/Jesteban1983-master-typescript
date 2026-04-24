"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromFront(arr, arg2) {
    let result = arr.shift();
    return arr;
}
let output = removeFromFront([1, 2, 3]);
console.log(output);
