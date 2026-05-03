"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(num1, num2) {
    let total = Math.imul(num1, num2);
    return total;
}
let output = multiply(1, 7);
console.log(output);
