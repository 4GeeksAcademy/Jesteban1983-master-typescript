function findMaxLengthOfThreeWords(word1: string, word2: string, word3: string): number {
  
  return Math.max(word1.length,word2.length,word3.length);
}
let output=findMaxLengthOfThreeWords('a','b','see');
console.log(output);
export {};
