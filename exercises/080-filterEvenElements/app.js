"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenElements(arr, arg2) {
    // your code here
    let par = arr.filter(n => n % 2 === 0);
    return par;
}
let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output);
