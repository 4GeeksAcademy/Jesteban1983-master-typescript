function addToFront(arr: unknown[], element: number): string {
    arr.unshift(element)
    return arr;

}
 let output=addToFront([1,2],9);
 console.log(output);
export {};
