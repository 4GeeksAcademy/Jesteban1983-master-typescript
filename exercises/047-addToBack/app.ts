function addToBack(arr: unknown[], element: number): string {
  arr.push(element);
  return arr;
}
let output = addToBack([1,2],3);
console.log(output)
export {};
