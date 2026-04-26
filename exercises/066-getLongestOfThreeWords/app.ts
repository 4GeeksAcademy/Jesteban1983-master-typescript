function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  let long = word1;
  if (word2.length>long.length){
      long = word2;
  }  
  if (word3.length>long.length){
    long= word3;
  }
    return long;
}
let output=getLongestOfThreeWords('these','three','world');
console.log(output);
export {};
