"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLessThan(num1, num2) {
    if (num2 < num1) {
        return true;
    }
    return false;
}
let output = isLessThan(9, 4);
console.log(output);
