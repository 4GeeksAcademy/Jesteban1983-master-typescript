"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flipPairs(input) {
    let result = "";
    for (let i = 0; i < input.length; i += 2) {
        if (input[i + 1] !== undefined) {
            result += input[i + 1] + input[i];
        }
        else {
            result += input[i];
        }
    }
    return result;
}
let input = 'Jonathan';
let output = flipPairs(input);
console.log(output);
