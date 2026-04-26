function computeSumOfAllElements(arr: unknown[], arg2: unknown): number {
  // your code here
  let suma = arr.reduce((a,b) => a+b , 0);

  return suma;
}
let output=computeSumOfAllElements([1,2,3]);
console.log(output);
export {};
