"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToBack(arr, element) {
    arr.push(element);
    return arr;
}
let output = addToBack([1, 2], 3);
console.log(output);
