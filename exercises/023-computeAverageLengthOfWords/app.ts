function computeAverageLengthOfWords(word1: string, word2: string): number {
   return (word1.length + word2.length) / 2;

}
let output = computeAverageLengthOfWords('code','programs');
console.log(output);
export {};
