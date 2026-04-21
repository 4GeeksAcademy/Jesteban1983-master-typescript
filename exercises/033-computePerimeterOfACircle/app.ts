function computePerimeterOfACircle(radius: number): number {
  let result= (Math.PI*radius)*2;
  return result;
}
let output=computePerimeterOfACircle(4);
console.log(output);
export {};
