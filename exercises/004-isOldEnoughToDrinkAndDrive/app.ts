function canDrink(age: number): boolean {
  return age >= 21;
}

function canDrive(age: number): boolean {
  return age >= 16;
}

function isOldEnoughToDrinkAndDrive(age: number): boolean {
    return false;
}
let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

export {};
