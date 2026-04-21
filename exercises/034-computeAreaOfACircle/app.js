"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAreaOfACircle(radius) {
    let result = Math.PI * (radius ** 2);
    return result;
}
let output = computeAreaOfACircle(4);
console.log(output);
