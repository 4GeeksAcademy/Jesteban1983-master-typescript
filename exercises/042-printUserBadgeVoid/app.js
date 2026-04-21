"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserBadge(name, level) {
    let nombre = name;
    let nivel = level;
    return `${name} ${nivel}`;
}
let output = printUserBadge('Jonathan', 2);
console.log(output);
