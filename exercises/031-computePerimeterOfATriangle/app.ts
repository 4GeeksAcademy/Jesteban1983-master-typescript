function computePerimeterOfATriangle(side1: number, side2: number, side3: number): number {
  let perimetro= side1+side2+side3;

  return perimetro;
}
let output=computePerimeterOfATriangle(6,4,10);
console.log(output);
export {};
