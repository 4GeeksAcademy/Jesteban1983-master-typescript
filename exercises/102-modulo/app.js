"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modulo(num1, num2) {
    let resultado = Math.trunc(num1 / num2);
    let producto = resultado * num2;
    let residuo = num1 - producto;
    return residuo;
}
let output = modulo(25, 4);
console.log(output);
