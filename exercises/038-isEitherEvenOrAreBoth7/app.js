"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEitherEvenOrAreBoth7(num1, num2) {
    let par = (num1 % 2 == 0 || num2 % 2 == 0);
    let num7 = (num1 == 7 && num2 == 7);
    if (par == true || num7 == true) {
        return true;
    }
    return false;
}
let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output);
