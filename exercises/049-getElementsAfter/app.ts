function getElementsAfter(array: unknown[], n: unknown, arg3: number): string {
  
  return array.slice(n + 1);
}
  let output=getElementsAfter(['a','b','c','d','e'],2);
  console.log(output);
export {};
