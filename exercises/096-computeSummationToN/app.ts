function computeSummationToN(n: number): number {
  // your code here
  let suma = 0;
  for (let i=0; i <= n; i++){
    if (n === 4){
    console.log(suma);
    }
    suma += i;
  }
    return suma;
}
let output=computeSummationToN(6);
console.log(output);
export {};
