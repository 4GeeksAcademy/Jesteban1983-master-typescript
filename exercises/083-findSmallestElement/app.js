"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestElement(arr, arg2) {
    // your code here
    if (arr.length === 0)
        return 0;
    return Math.min(...arr);
}
let output = findSmallestElement([4, 1, 9, 10]);
console.log(output);
