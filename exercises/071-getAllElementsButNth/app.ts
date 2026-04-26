function getAllElementsButNth(array: unknown[], n: number): unknown[] {
  // your code here
  array.splice(n,1);
  return array;
}
let output=getAllElementsButNth(['a','b','c'],1);
console.log(output);
export {};
