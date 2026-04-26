function keep(arr: unknown[], keeper: number, arg3: unknown, arg4: number): string {
  // your code here
  let arg = arr.filter(a => a === keeper);
  return arg;
}
let output=keep([1,2,3,2,1],2);
console.log(output);
export {};
