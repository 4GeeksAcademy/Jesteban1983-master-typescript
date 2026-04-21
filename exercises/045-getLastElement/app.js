"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElement(array, arg2) {
    arg2 = array.length - 1;
    return array.at(arg2);
}
let output = getLastElement([1, 2, 3, 4]);
console.log(output);
