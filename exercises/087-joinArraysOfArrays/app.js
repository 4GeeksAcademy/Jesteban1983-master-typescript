"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function joinArrayOfArrays(arr, arg2, arg3, arg4, arg5, arg6, arg7) {
    // your code here
    return [].concat(...arr);
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output);
