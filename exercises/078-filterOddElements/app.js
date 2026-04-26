"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterOddElements(arr, arg2) {
    // your code here
    return arr.filter(n => n % 2 !== 0);
}
let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);
