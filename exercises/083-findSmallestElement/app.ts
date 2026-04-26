function findSmallestElement(arr: unknown[], arg2: unknown): number {
  // your code here
  if (arr.length === 0 ) return 0;
  return Math.min(...arr);
}
let output=findSmallestElement([4,1,9,10]);
console.log(output);
export {};
