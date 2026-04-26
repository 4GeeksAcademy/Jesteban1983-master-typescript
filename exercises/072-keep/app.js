"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keep(arr, keeper, arg3, arg4) {
    // your code here
    let arg = arr.filter(a => a === keeper);
    return arg;
}
let output = keep([1, 2, 3, 2, 1], 2);
console.log(output);
