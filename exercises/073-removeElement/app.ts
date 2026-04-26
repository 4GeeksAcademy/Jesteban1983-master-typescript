function removeElement(arr: unknown[], n: unknown, arg3: number): unknown[] {
  let arg = arr.filter(a => a !== n);
  return arg;
}
let output=removeElement([1,2,3,2,1],2);
console.log(output);
export {};
