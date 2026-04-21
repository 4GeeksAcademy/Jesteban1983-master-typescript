"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsAfter(array, n, arg3) {
    return array.slice(n + 1);
}
let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output);
