function squareElements(arr: unknown[]): unknown[] {
  // your code here
  let numCuad = arr.map(n => n ** 2);
      return numCuad;

}
let output= squareElements([1,2,3]);
console.log(output);
export {};
