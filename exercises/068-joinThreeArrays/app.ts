function joinThreeArrays(arr1: unknown[], arr2: unknown[], arr3: unknown[]): string {
 
  let x= arr1.concat(arr2,arr3);
  return x;
  
}
let output=joinThreeArrays([1,2],[3,4],[5,6]);
console.log(output);
export {};
