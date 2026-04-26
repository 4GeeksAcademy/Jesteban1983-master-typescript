"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestNumberAmongMixedElements(arr, arg2, arg3, arg4) {
    // your code here
    let num = arr.filter(el => typeof el === 'number');
    if (num.length === 0)
        return 0;
    if (arr.length === 0)
        return 0;
    let shorts = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < shorts) {
            shorts = num[i].length;
        }
    }
    return shorts;
}
let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);
