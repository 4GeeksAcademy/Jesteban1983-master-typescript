function filterOddLengthWords(words: unknown[]): number {
  // your code here
  let nuevo = words.filter(a => a.length % 2 !== 0);
    return nuevo;
}
let output=filterOddLengthWords(['there','it','is','now']);
console.log(output);
)
export {};
