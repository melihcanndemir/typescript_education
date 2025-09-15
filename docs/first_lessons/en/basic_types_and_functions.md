# TypeScript Practice: Basic Types and Functions

## Why Practice?

Practicing with TypeScript is crucial to understanding its power and flexibility. Hands-on applications demonstrate how theoretical knowledge is applied in real-world scenarios and help improve your problem-solving skills.

## Practice 1: Simple Calculator
In this practice, we will create a simple calculator function that adds, subtracts, multiplies, and divides two numbers.

```typescript
function calculator(num1: number, num2: number, operation: string): number {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Division by zero error!');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operation!');
  }
}

console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5
console.log(calculator(10, 5, '*')); // 50
console.log(calculator(10, 5, '/')); // 2
```

## Practice 2: Student Grade Calculation
In this practice, we will create a function that takes a student's grades, calculates the average, and determines whether they passed or failed.

```typescript
function calculateGrade(grades: number[]): string {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  let average = total / grades.length;

  if (average >= 60) {
    return 'Passed. Average: ' + average;
  } else {
    return 'Failed. Average: ' + average;
  }
}

console.log(calculateGrade([50, 60, 70, 80])); // Failed. Average: 65
console.log(calculateGrade([70, 80, 90, 100])); // Passed. Average: 85
```

## Practice 3: String Reversal
In this practice, we will create a function that reverses a given string.

```typescript
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // olleH
console.log(reverseString('TypeScript')); // tpircSepyT
```

## Examples

### Example 1:
Create a function that takes a user's name and age and prints them to the console.

### Example 2:
Create a function that finds the largest number in an array.

### Example 3:
Create a function that checks whether a number is odd or even.

### Example 4:
Create a function for an e-commerce site that calculates the total cost of items in a user's cart.

### Example 5:
Create a function for a weather application that converts a temperature from Celsius to Fahrenheit.

## AI Learning Tips
💡 **Tip**: Using types correctly in TypeScript ensures your code is safer and more readable.

💡 **Tip**: Writing functions in small, specialized pieces makes your code more modular.

💡 **Tip**: Don’t forget to use try-catch blocks for error handling.

💡 **Tip**: Add comments to keep your code organized and readable.

💡 **Tip**: Learn TypeScript’s advanced features (e.g., generics, classes, interfaces) to build more complex applications.
