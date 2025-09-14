// A generic function that filters an array based on a predicate
// Description: This function takes an array of any type and a predicate function, returning a new array containing only the elements that satisfy the predicate.
// Example usage is provided to demonstrate filtering an array of numbers to get only even numbers.

// Generic function definition
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);

// Output the result
console.log(evenNumbers); // Output: [2, 4, 6]