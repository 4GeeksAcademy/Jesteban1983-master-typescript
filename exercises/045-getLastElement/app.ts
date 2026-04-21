function getLastElement(array: unknown[], arg2: unknown): number {
    arg2 = array.length - 1;
    return array.at(arg2);
}
    let output=getLastElement([1,2,3,4]);
    console.log(output);
export {};
