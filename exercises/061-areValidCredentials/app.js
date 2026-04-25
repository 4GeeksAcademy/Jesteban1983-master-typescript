"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areValidCredentials(name, pass) {
    // your code here
    if (name.length > 3 && pass.length >= 8) {
        return true;
    }
    return false;
}
let output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output);
