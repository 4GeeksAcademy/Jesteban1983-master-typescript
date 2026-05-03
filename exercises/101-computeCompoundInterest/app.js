"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let total = principal * Math.pow((1 + interestRate / compoundingFrequency), (compoundingFrequency * timeInYears));
    let interes = total - principal;
    return interes;
}
let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output);
