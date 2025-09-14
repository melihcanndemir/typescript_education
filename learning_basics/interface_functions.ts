// Define an interface for a function that takes two numbers and returns a number

interface MathOperations {
    (x: number, y: number): number;
};

const add: MathOperations = (x, y) => x + y;
const subtract: MathOperations = (x, y) => x - y;

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2