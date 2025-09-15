# TypeScript Knowledge Quiz: Test Yourself

Congratulations on completing the TypeScript introduction course! Now it’s time to test your knowledge. This quiz will help you assess how well you’ve understood the core concepts. Each question covers an important aspect of TypeScript. Good luck!

## Instructions:

Read the questions carefully and try to find the correct answers. You can note down your answers or write them on a piece of paper. Afterward, check the answers to evaluate your performance.

### Question 1:

Which of the following is *not* a core feature of TypeScript?

A) Static typing  
B) Interfaces  
C) Dynamic typing  
D) Classes  

### Question 2:

```typescript
let age: number = "30";
```

Will the above code block work? If not, why?

### Question 3:

How do you specify a function’s return type in TypeScript? Provide an example.

### Question 4:

Is there an error in the following TypeScript code? If so, fix it.

```typescript
function greet(name) {
  console.log("Hello, " + name);
}

greet(123);
```

### Question 5:

What are the potential disadvantages of using the `any` data type in TypeScript?

## Answer Key:

1. **C) Dynamic typing** (TypeScript uses static typing.)  
2. It won’t work because the `age` variable is typed as `number`, but a `string` value is assigned. Corrected version: `let age: number = 30;`  
3. The return type is specified after the function’s parameter parentheses using `: type`. Example:  
   ```typescript
   function add(a: number, b: number): number {
     return a + b;
   }
   ```  
4. Yes, there’s an error. The `name` parameter’s type is not specified, and passing a numeric value like `123` is illogical. Corrected version:  
   ```typescript
   function greet(name: string) {
     console.log("Hello, " + name);
   }

   greet("Jane");
   ```  
5. The `any` data type removes type safety and diminishes TypeScript’s benefits. It prevents catching type-related errors during compilation.

## Evaluation:

- **5 correct answers**: Excellent! You’ve mastered the TypeScript basics.  
- **3-4 correct answers**: Good job! You understand the core concepts, but you could use a bit more practice.  
- **1-2 correct answers**: There are areas to improve. Review the previous steps for better understanding.  
- **0 correct answers**: Don’t worry! You’re just starting your TypeScript journey. Revisit the steps and practice more.

## Examples

### Example 1:  
A test can be created to measure knowledge of variable declaration and typing in TypeScript. For instance, a question like “What data type is used in the following code block?” could be asked.

### Example 2:  
A scenario can be designed to test the ability to correctly define a function’s parameter and return types. For example, “Write a TypeScript function that adds two numbers and returns the result.”

### Example 3:  
To assess understanding of TypeScript interfaces, a task like “Define an interface and create an object that uses it” could be given.

### Example 4:  
To evaluate the use of classes and objects in TypeScript, a question like “Define a class, add properties, and create an instance of it” could be asked.

### Example 5:  
To test understanding of the consequences and risks of using the `any` type, a question like “What are the implications of using the `any` data type?” could be posed.

## AI Learning Tips  
💡 **Tip**: Don’t hesitate to refer to TypeScript documentation and resources while solving quiz questions. This will support your learning process.  

💡 **Tip**: When answering, don’t just provide the correct answer—explain why you chose it. This will help you understand the concepts more deeply.  

💡 **Tip**: If you’re struggling with a question, break it down into smaller parts and tackle each part separately. This makes the problem more manageable.  

💡 **Tip**: After checking your answers, review any questions you got wrong and try to understand why. This will help you avoid similar mistakes in the future.  

💡 **Tip**: Treat your quiz results as a learning opportunity. Identify the topics where you need more practice and focus on them.