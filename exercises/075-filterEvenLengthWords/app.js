"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenLengthWords(words, arg2) {
    let nuevo = words.filter(a => a.length % 2 === 0);
    return nuevo;
}
let output = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output);
