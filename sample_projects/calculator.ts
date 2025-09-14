// A simple calculator implementation in TypeScript
// that supports basic arithmetic operations.
// The calculator can add, subtract, multiply, and divide two numbers.

interface Calculator {
    add(x: number, y: number): number;
    subtract(x: number, y: number): number;
    multiply(x: number, y: number): number;
    divide(x: number, y: number): number;
}

const myCalculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => {
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        } else {
            return x / y;
        }
    }
};

console.log(myCalculator.add(10, 5));        // Output: 15
console.log(myCalculator.subtract(10, 5));   // Output: 5
console.log(myCalculator.multiply(10, 5));   // Output: 50
console.log(myCalculator.divide(10, 5));     // Output: 2
