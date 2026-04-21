"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computePerimeterOfARectangle(length, width) {
    let perimetro = (length + width) * 2;
    return perimetro;
}
let output = computePerimeterOfARectangle(5, 2);
console.log(output);
