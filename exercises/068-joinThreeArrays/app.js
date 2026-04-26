"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function joinThreeArrays(arr1, arr2, arr3) {
    let x = arr1.concat(arr2, arr3);
    return x;
}
let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);
