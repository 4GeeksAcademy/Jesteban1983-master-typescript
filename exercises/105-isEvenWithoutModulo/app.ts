function isEvenWithoutModulo(num: number): boolean {
  if (num % 2 == 0){
    return true;
  }
  return false;
}
let output = isEvenWithoutModulo(8);
console.log(output);
export {};
