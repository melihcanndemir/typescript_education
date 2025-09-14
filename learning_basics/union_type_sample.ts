// A TypeScript function that returns either a number or a string based on the input values.

type Result = number | string;

function process(a: number, b: number): Result {
    if (a > b) {
        return a - b; // returns a number
    } else {
        return "a is not greater than b"; // returns a string
    }
}

console.log(process(5, 3)); // Output: 2
console.log(process(2, 4)); // Output: "a is not greater than b"