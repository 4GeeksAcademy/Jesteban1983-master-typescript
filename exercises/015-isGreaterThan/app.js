"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isGreaterThan(num1, num2) {
    if (num2 > num1) {
        return true;
    }
    return false;
}
let output = isGreaterThan(11, 10);
console.log(output);
