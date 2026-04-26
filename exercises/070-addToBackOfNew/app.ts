function addToBackOfNew(arr: unknown[], element: number): unknown[] {
  // your code here

  return arr.concat(element);
}
let input = [1,2];
let output= addToBackOfNew(input,3);
console.log(input);
console.log(output);
export {};
