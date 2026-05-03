function modulo(num1: number, num2: number): number {
  
       let resultado = Math.trunc(num1 / num2);
       let producto = resultado * num2;
       let residuo = num1 - producto;
       return residuo;
}
let output= modulo(25,4);
console.log(output);
export {};
