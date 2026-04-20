"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfThreeWords(word1, word2, word3) {
    return (word1.length) + (word2.length) + (word3.length);
}
let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);
