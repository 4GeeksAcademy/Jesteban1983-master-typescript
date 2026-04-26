function getLongestElement(arr: string[]): string {
  // your code here
  if (arr.length === 0){
      return "";
  } 
  
  let large = arr[0];

  for(let i = 1; i < arr.length; i++){
    if ( arr[i].length > large.length){
       large = arr[i]
    } 
  }
  return large;
}
let output=getLongestElement(['one','two','threee']);
console.log(output);
export {};
