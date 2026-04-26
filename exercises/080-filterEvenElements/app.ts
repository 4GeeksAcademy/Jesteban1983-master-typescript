function filterEvenElements(arr: unknown[], arg2: unknown): unknown[] {
  // your code here
    let par = arr.filter(n => n % 2 === 0); 
    return par;
}
let output=filterEvenElements([2,3,4,5,6]);
console.log(output);
export {};
