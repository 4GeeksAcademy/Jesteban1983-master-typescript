"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllWords(str) {
    let letra = str;
    let palabra = letra.split(' ');
    return palabra;
}
let output = getAllWords('Radagast the Brown');
console.log(output);
