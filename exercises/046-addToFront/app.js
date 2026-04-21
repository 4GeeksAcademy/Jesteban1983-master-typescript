"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}
let output = addToFront([1, 2], 9);
console.log(output);
