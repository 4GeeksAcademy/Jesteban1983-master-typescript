"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEitherEven(n1, n2) {
    if (n1 % 2 == 0 || n2 % 2 == 0) {
        return true;
    }
    return false;
}
let output = isEitherEven(1, 4);
console.log(output);
