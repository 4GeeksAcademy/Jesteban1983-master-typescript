"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOldEnoughToDrink(age) {
    if (age >= 21) {
        return true;
    }
    else {
        return false;
    }
}
let output = isOldEnoughToDrink(22);
console.log(output);
