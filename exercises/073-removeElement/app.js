"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeElement(arr, n, arg3) {
    let arg = arr.filter(a => a !== n);
    return arg;
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);
