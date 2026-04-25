function getAllWords(str: string): string {
  let letra: string = str;
  let palabra: string[] = letra.split(' ');

  return palabra;
}
let output= getAllWords('Radagast the Brown');
console.log(output);
export {};
