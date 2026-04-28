function computeSumBetween(num1: number, num2: number): number {
  // your code here
  if (num1>num2) return 0;
  let suma=0;

  for( let i = num1; i < num2; i++){
    suma += i;
  }
  return suma;
}
let output=computeSumBetween(2,5);
console.log(output);
export {};
