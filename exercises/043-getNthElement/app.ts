function getNthElement(array: unknown[], n: number): unknown[] {
     
    return array.at(n);
}
let output= getNthElement([1,3,5],1);
console.log(output);
export {};
