"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(arr, arg2) {
    // your code here
    return arr.reduce((a, b) => a + b, 0);
}
function average(arr, arg2) {
    // your code here
    return sum(arr) / arr.length;
}
console.log(average([1, 2]));
