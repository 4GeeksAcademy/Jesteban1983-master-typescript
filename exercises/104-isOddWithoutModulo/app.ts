function isOddWithoutModulo(num: number): boolean {
  if (num % 2 == 0){
  return false;
  }
  return true;
}
let output= isOddWithoutModulo(17);
console.log(output);
export {};
