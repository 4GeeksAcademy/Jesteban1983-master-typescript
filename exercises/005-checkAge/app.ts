function checkAge(name: string, age: number): string {
    if (age < 21) {
        return `Go home, ${name}!`;
    }
    return `Welcome, ${name}!`;
}
let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
export {};
