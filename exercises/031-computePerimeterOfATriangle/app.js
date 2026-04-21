"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computePerimeterOfATriangle(side1, side2, side3) {
    let perimetro = side1 + side2 + side3;
    return perimetro;
}
let output = computePerimeterOfATriangle(6, 4, 10);
console.log(output);
