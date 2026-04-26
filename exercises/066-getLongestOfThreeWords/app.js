"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    let long = word1;
    if (word2.length > long.length) {
        long = word2;
    }
    if (word3.length > long.length) {
        long = word3;
    }
    return long;
}
let output = getLongestOfThreeWords('these', 'three', 'world');
console.log(output);
