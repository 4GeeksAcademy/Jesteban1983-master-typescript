"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOddWithoutModulo(num) {
    if (num % 2 == 0) {
        return false;
    }
    return true;
}
let output = isOddWithoutModulo(17);
console.log(output);
