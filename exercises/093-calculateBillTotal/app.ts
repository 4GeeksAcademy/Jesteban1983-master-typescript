
function calculateBillTotal(preTaxAndTipAmount: number): number {
  // your code here
  let impuestoVentas = preTaxAndTipAmount * (9.5/100);
  let propina = preTaxAndTipAmount * (15/100);
  
  return (preTaxAndTipAmount+impuestoVentas+propina);

}
let output = calculateBillTotal(20);
console.log(output);
export {};
