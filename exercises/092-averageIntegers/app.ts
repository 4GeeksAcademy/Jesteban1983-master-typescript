function sum(arr: unknown[], arg2: unknown): number {
  // your code here
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr: unknown[], arg2: unknown): number {
  // your code here
  return sum(arr) / arr.length;
}
console.log(average([1, 2]));
export {};
