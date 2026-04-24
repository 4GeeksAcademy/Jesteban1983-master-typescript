function removeFromFront(arr: unknown[], arg2: unknown): string {
  let result = arr.shift();
  return arr;
}
  let output=removeFromFront([1,2,3]);
  console.log(output);
export {};
