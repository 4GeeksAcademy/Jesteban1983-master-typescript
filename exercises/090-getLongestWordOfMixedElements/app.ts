function getLongestWordOfMixedElements(arr: unknown[]): string {
  // your code here
  let str = arr.filter(el => typeof el === 'string');

  if (str.length === 0) return '';
  if (arr.length === 0) return '';
  
  let large = str[0];
  
  for (let i=1; i < str.length; i++){
    if (str[i].length> large.length){
      large = str[i];
    }
  }
  return large;
}
let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);
export {};
