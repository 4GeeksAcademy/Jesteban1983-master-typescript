function joinArrayOfArrays(arr: unknown[], arg2: unknown, arg3: unknown[], arg4: unknown, arg5: unknown[], arg6: string, arg7: unknown): unknown[] {
  // your code here
    return [].concat(...arr);

}
let output = joinArrayOfArrays([[1,4],[true,false],['x','y']]);
console.log(output)
export {};
