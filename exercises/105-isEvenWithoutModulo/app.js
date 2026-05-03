"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEvenWithoutModulo(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
let output = isEvenWithoutModulo(8);
console.log(output);
