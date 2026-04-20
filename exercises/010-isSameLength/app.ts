function isSameLength(word1: string, word2: string): boolean {
  if (word1.length == word2.length){
    return true;
  }
  return false;
}
let output = isSameLength('words', 'super');
console.log(output);
export {};
