"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertDoubleSpaceToSingle(str) {
    let a = str.split('  ');
    let espacio = a.join(' ');
    return espacio;
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
