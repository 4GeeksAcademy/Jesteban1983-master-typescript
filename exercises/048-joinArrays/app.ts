function joinArrays(arr1: unknown[], arr2: unknown[]): string {
 let result = arr1.concat(arr2);
  return result ;
}
let output=joinArrays([1,2],[3,4]);
console.log(output)
export {};
