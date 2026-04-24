function removeFromBack(arr: unknown[], arg2: number, arg3: unknown): string {
  let elim= arr.pop();
  return arr;
}
let output = removeFromBack([1,2,3]);
console.log(output);
export {};
