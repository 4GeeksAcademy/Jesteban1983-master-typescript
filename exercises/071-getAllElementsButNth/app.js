"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllElementsButNth(array, n) {
    // your code here
    array.splice(n, 1);
    return array;
}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);
