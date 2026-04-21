function isEitherEvenAndLessThan9(num1: number, num2: number): boolean {
  let par=(num1 % 2 == 0 || num2 % 2 == 0);
  let menor=(num1 < 9 && num2 < 9);
  if (par == true && menor == true){
    return true;
   }
  return false;
  }
  let output=isEitherEvenAndLessThan9(72,4);
  console.log(output);
  export {};
