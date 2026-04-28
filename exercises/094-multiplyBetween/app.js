"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyBetween(num1, num2) {
    // your code here
    if (num2 < num1)
        return 0;
    let producto = 1;
    for (let i = num1; i < num2; i++) {
        producto = producto * i;
    }
    return producto;
}
let output = multiplyBetween(2, 5);
console.log(output);
