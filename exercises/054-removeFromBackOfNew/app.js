"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromBackOfNew(arr, arg2) {
    // your code here
    return arr.slice(0, arr.length - 1);
}
let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output);
console.log(arr);
