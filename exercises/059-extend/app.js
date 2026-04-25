"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extend(obj1, obj2) {
    for (let clave in obj2) {
        if (!(clave in obj1)) {
            obj1[clave] = obj2[clave];
        }
    }
    return obj1;
}
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 4, c: 3 };
console.log(extend(obj1, obj2));
