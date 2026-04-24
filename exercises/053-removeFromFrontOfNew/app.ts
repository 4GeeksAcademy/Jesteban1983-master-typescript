function removeFromFrontOfNew(arr: unknown): string {
  // your code here
  return arr.slice(1);
}
let arr=[1,2,3]
let output = removeFromFrontOfNew([arr]);
console.log(output);
console.log(arr);

export {};
