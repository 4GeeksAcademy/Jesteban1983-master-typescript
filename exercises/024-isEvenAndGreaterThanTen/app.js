"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEvenAndGreaterThanTen(num) {
    if (num % 2 == 0 && num > 10) {
        return true;
    }
    return false;
}
let output = isEvenAndGreaterThanTen(13);
console.log(output);
