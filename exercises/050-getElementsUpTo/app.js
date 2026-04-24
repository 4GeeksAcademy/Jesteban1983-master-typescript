"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsUpTo(array, n, arg3) {
    //array.slice(n)
    return array.slice(0, n);
}
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output);
