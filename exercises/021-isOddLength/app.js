"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOddLength(word) {
    if (Number(word.length) % 2 !== 0) {
        return true;
    }
    return false;
}
let output = isOddLength('special');
console.log(output);
