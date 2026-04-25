"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    return Math.max(word1.length, word2.length, word3.length);
}
let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output);
