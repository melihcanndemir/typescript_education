// Define a union type that can be either a string or a number
// Educational example for understanding union types in TypeScript

type answer = string | number;

const answer1: answer = "Yes";
const answer2: answer = 42;

console.log(answer1); // Output: Yes
console.log(answer2); // Output: 42
