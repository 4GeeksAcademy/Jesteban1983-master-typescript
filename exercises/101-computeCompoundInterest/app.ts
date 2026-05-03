function computeCompoundInterest(principal: number, interestRate: number, compoundingFrequency: number, timeInYears: number): number {
  let total = principal * Math.pow((1 + interestRate / compoundingFrequency), (compoundingFrequency * timeInYears))
  let interes = total - principal

  return interes;
}
let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output);
export {};
