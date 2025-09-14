// This TypeScript code demonstrates the use of union types to handle multiple data types in a single variable.
// Description: The code defines a function that accepts either a string or a number and processes it accordingly.
// It uses type guards to differentiate between the types at runtime.

// type definition using union types
type StringOrNumber = string | number;

// function that processes the input based on its type
function processValue(value: StringOrNumber): void {
    if (typeof value === 'string') {
        console.log("Value is String:", value.toUpperCase());
    } else {
        console.log("Value is Number:", (value * 2));
    }
}

// testing the function with different types
processValue("hello"); // Output: Value is String: HELLO
processValue(42); // Output: Value is Number: 84