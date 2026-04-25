function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  return Math.max(word1.length,word2.length,word3.length);
}
let output=getLongestOfThreeWords('these','three','words');
console.log(output);
export {};
