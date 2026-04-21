"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(texto) {
    let contador = 0;
    while (texto.substring(contador) !== "") {
        contador++;
    }
    return contador;
}
let output = getStringLength('Joonathan');
console.log(output);
