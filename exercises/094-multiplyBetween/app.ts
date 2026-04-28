function multiplyBetween(num1: number, num2: number): number {
  // your code here
  if (num2 < num1) return 0;

  let producto = 1;
  
  for(let i=num1; i < num2; i++){
    producto = producto * i;
  }
  return producto;
}
let output= multiplyBetween(2,5);
console.log(output);
export {};
