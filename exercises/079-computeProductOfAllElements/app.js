"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeProductOfAllElements(arr, arg2) {
    // your code here
    if (arr.length == 0)
        return 0;
    let producto = 1;
    for (let i = 0; i < arr.length; i++) {
        producto = producto * arr[i];
    }
    return producto;
}
let output = computeProductOfAllElements([2, 5, 6]);
console.log(output);
