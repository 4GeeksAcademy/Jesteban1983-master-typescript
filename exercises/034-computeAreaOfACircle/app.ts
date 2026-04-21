function computeAreaOfACircle(radius: number): number {
  let result=Math.PI * (radius**2);
  return result;
}
let output=computeAreaOfACircle(4);
console.log(output);
export {};
