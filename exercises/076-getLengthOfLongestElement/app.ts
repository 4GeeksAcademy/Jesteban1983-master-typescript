function getLengthOfLongestElement(arr: string[], ): number {
  // your code here
  if (arr.length === 0){
      return 0;
  } 

  let maxLeng = arr[0];
 
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > maxLeng.length){
        maxLeng = arr[i];
    }
  }
  return maxLeng.length;
}
let output= getLengthOfLongestElement(['one','two','three']);
console.log(output);
export {};
