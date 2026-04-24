function getElementsUpTo(array: unknown[], n: unknown, arg3: number): string {
  //array.slice(n)
  return array.slice(0,n);
}
let output=getElementsUpTo(['a','b','c','d','e'],3)
console.log(output)
export {};
