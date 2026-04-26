function getLengthOfShortestElement(arr: unknown[], arg2: string): number {
  // your code here
  if (arr.length === 0) return 0;
      let small= arr[0];
  for (let i=0; i < arr.length; i++){
    if (arr[i].length < small.length){
        small = arr[i]
    }
  }
  return small.length;
}
let output=getLengthOfShortestElement(['one','two','three']);
console.log(output);

export {};
