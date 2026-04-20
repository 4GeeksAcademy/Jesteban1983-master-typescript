"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOldEnoughToVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let output = isOldEnoughToVote(22);
console.log(output);
