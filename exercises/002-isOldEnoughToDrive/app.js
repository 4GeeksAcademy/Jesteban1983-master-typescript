"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOldEnoughToDrive(age) {
    if (age >= 16) {
        return true;
    }
    else {
        return false;
    }
}
let output = isOldEnoughToDrive(22);
console.log(output);
