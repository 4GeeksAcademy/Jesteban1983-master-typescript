function or(expression1: boolean, expression2: boolean): boolean {
  if !(!expression1 && !expression2 ){
    return true;
  }
  return false;
}
  let output=or(true,false);
  console.log(output);
export {};
