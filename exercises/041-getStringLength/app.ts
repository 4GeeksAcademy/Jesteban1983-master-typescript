function getStringLength(texto: string): number {
  let contador = 0;
  while (texto.substring(contador) !== ""){
  contador++;
  }
  return contador;
  }
  let output = getStringLength('Joonathan');
  console.log(output);

  export {};
