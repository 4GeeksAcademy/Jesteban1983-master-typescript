"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestOfThreeWords(word1, word2, word3) {
    let long = word1;
    if (word2.length < long.length) {
        long = word2;
    }
    if (word3.length < long.length) {
        long = word3;
    }
    return long;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output);
