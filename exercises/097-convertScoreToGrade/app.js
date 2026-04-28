"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertScoreToGrade(score) {
    // your code here
    let grado = '';
    if (score <= 100 && score >= 90) {
        grado = 'A';
    }
    else if (score <= 89 && score >= 80) {
        grado = 'B';
    }
    else if (score <= 79 && score >= 70) {
        grado = 'C';
    }
    else if (score <= 69 && score >= 60) {
        grado = 'D';
    }
    else if (score <= 59 && score > 0) {
        grado = 'F';
    }
    else {
        grado = 'INVALID SCORE';
    }
    return grado;
}
let output = convertScoreToGrade(91);
console.log(output);
