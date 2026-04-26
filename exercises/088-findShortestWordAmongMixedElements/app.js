"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestWordAmongMixedElements(arr) {
    // your code here
    const strings = arr.filter(el => typeof el === 'string');
    if (arr.length === 0) {
        return "";
    }
    let shortes = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortes.length) {
            shortes = strings[i];
        }
    }
    return shortes;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);
