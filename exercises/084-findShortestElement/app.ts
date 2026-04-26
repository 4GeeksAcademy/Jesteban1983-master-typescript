function findShortestElement(arr: unknown[], arg2: string): string {
  // your code here
  if (arr.length ===0) return "";
  let small = arr[0];
  for (let i = 1; i<arr.length; i++){
    if (arr[i].length < small.length){
        small=arr[i];
    }
  }
    return small;
}
let output=findShortestElement(['a','two','three']);
console.log(output);
export {};
