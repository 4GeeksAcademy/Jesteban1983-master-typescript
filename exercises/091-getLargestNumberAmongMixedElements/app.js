"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let num = arr.filter(n => typeof n === 'number');
    if (num.length === 0)
        return 0;
    if (arr.length === 0)
        return 0;
    let large = arr[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > large) {
            large = num[i];
        }
    }
    return large;
}
let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);
