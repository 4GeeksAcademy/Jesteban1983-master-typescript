"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromBack(arr, arg2, arg3) {
    let elim = arr.pop();
    return arr;
}
let output = removeFromBack([1, 2, 3]);
console.log(output);
