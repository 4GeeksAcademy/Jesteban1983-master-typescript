"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfShortestElement(arr, arg2) {
    // your code here
    if (arr.length === 0)
        return 0;
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < small.length) {
            small = arr[i];
        }
    }
    return small.length;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output);
