# TypeScript Basics: Reinforcing What We've Learned

In this section, we will reinforce the core TypeScript concepts we've learned. We'll revisit variables, types, functions, and interfaces with examples to deepen our understanding. This section is designed to solidify your knowledge and boost your confidence before moving on to practical applications.

## Why Reinforce?

Reinforcing what we've learned before applying it helps us succeed in the long run. This step ensures the information sticks in our memory and makes us more comfortable tackling complex problems.

## What's in This Section?

- Variable declaration and typing exercises
- Function creation and parameter type specification exercises
- Interface definition and usage examples
- Recalling the benefits of TypeScript

Let's dive in and move forward in the TypeScript world with confidence!

## Examples

### Example 1: Variable Declaration and Typing
```typescript
let name: string = "John";
let age: number = 30;
let isMarried: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Married: ${isMarried}`);
```
In this example, the `name` variable is of type `string`, `age` is of type `number`, and `isMarried` is of type `boolean`. TypeScript helps prevent errors by enforcing these types.

### Example 2: Function Creation
```typescript
function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(5, 3);
console.log(`Result: ${result}`);
```
In this example, the `add` function takes two parameters of type `number` and returns a `number`. Ensuring the function is called with the correct types is a key benefit of TypeScript.

### Example 3: Interface Definition
```typescript
interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

let john: Person = { name: "John", age: 30 };
printPerson(john);
```
In this example, a `Person` interface is defined with `name` and `age` properties. The `printPerson` function takes an object that conforms to the `Person` interface and prints its properties. Interfaces make our code more organized and understandable.

### Example 4: Using Union Types
```typescript
function displayId(id: string | number) {
  console.log(`ID: ${id}`);
}

displayId(123);
displayId("ABC");
```
In this example, the `displayId` function can accept either a `string` or a `number` for the `id` parameter. This demonstrates the flexibility of union types.

## AI Learning Tips
💡 **Tip**: Specifying variable types in TypeScript makes your code more reliable. Ensure you use types correctly.

💡 **Tip**: Defining parameter and return types for functions makes it easier to use them correctly.

💡 **Tip**: Interfaces are useful for defining the structure of objects. Use them to make your code more modular and understandable.

💡 **Tip**: Pay close attention to error messages. TypeScript helps you catch errors early, and error messages can guide you to the source of the problem.

💡 **Tip**: Don’t shy away from practicing! The more you code, the better you’ll understand TypeScript.