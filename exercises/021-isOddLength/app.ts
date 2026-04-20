function isOddLength(word: string): boolean {
  if (Number(word.length) % 2 !== 0 ){
    return true;
  }
  return false;
}
 let output= isOddLength('special');
 console.log(output);
export {};
