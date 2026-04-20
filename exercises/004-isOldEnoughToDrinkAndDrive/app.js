"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canDrink(age) {
    return age >= 21;
}
function canDrive(age) {
    return age >= 16;
}
function isOldEnoughToDrinkAndDrive(age) {
    return false;
}
let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
