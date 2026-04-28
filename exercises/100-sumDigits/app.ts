function sumDigits(num: string): string {
  // your code here
  let array:string = String(num);
  let sum: number = 0;
  let inicio = 0;
  if (num < 0 ){
      sum -= Number(array[1]);
      inicio = 2;
  }
  for (let i = inicio; i < array.length; i++) {
      sum += Number(array[i]) 
  }
    return sum ;
}
let output=sumDigits(-316);
console.log(output);

export {};
