function computeAverageOfNumbers(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const suma = nums.reduce((acc, elem) => acc + elem, 0);
  return suma / nums.length;
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);
export {};
