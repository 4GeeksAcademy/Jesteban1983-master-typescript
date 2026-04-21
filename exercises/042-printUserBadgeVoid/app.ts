function printUserBadge(name: string, level: number): void {
  let nombre = name;
  let nivel = level;
  return `${name} ${nivel}`;
  }
let output=printUserBadge('Jonathan',2)
console.log(output);
export {};
