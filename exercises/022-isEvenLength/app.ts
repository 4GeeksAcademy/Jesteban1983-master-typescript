function isEvenLength(word: string): boolean {
  if (word.length % 2 ==0){
    return true;
  }
  return false;
}
let output=isEvenLength('wow');
console.log(output);
export {};
