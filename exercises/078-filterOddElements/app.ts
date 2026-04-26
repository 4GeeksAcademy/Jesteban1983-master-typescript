function filterOddElements(arr: unknown[], arg2: unknown): unknown[] {
  // your code here

  return arr.filter(n => n % 2 !== 0);
}
let output=filterOddElements([1,2,3,4,5]);
console.log(output)
export {};
