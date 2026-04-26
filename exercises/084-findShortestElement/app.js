"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestElement(arr, arg2) {
    // your code here
    if (arr.length === 0)
        return "";
    let small = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < small.length) {
            small = arr[i];
        }
    }
    return small;
}
let output = findShortestElement(['a', 'two', 'three']);
console.log(output);
