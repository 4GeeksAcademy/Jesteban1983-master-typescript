function convertDoubleSpaceToSingle(str: string): string {
  let a = str.split('  ');
  let espacio = a.join(' ');
  return espacio;
}
let output=convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
export {};
