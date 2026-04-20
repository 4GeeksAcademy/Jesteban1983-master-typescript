function isOldEnoughToDrink(age: number): boolean {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

let output = isOldEnoughToDrink(22);
console.log(output);


export {};
