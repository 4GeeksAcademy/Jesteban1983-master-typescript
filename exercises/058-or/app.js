"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function or(expression1, expression2) {
    if (!(!expression1 && !expression2)) {
        return true;
    }
    return false;
}
let output = or(true, false);
console.log(output);
