"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let grado = '';
    if (score === 100)
        grado = 'A+';
    else if (score < 100 && score >= 90) {
        if (score >= 98 && score <= 99)
            grado = 'A+';
        else if (score >= 90 && score <= 92)
            grado = 'A-';
        else
            grado = 'A';
    }
    else if (score <= 89 && score >= 80) {
        if (score >= 88 && score <= 89)
            grado = 'B+';
        else if (score >= 80 && score <= 82)
            grado = 'B-';
        else
            grado = 'B';
    }
    else if (score <= 79 && score >= 70) {
        if (score >= 78 && score <= 79)
            grado = 'C+';
        else if (score >= 70 && score <= 72)
            grado = 'C-';
        else
            grado = 'C';
    }
    else if (score <= 69 && score >= 60) {
        if (score >= 68 && score <= 69)
            grado = 'D+';
        else if (score >= 60 && score <= 62)
            grado = 'D-';
        else
            grado = 'D';
    }
    else if (score <= 59 && score > 0) {
        if (score >= 8 && score <= 9)
            grado = 'F+';
        else if (score >= 0 && score <= 2)
            grado = 'F-';
        else
            grado = 'F';
    }
    else {
        grado = 'INVALID SCORE';
    }
    return grado;
}
let output = convertScoreToGradeWithPlusAndMinus(98);
console.log(output);
