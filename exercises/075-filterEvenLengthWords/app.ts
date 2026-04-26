function filterEvenLengthWords(words: unknown[], arg2: string): number {
    let nuevo= words.filter(a => a.length % 2 === 0);

    return nuevo;
}
let output=filterEvenLengthWords(['word','horse','car','computer']);
console.log(output);
export {};
