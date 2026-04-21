"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computePerimeterOfACircle(radius) {
    let result = (Math.PI * radius) * 2;
    return result;
}
let output = computePerimeterOfACircle(4);
console.log(output);
