function computePerimeterOfARectangle(length: number, width: number): number {
  let perimetro = (length + width) * 2; 
  return perimetro;
}
let output = computePerimeterOfARectangle(5,2)
console.log(output);
export {};
