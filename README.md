# TypeScript Educational Project 🚀

<div align="center">
  <img src="typescript.jpg" alt="TypeScript Logo" width="200"/>

  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/your/repo/graphs/commit-activity)
  [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](README.md)
</div>

A comprehensive educational material designed for those who want to learn TypeScript from basic to advanced level. This project provides a structured learning path with practical examples, real-world applications, and best practices.

## 📚 Project Structure

The project consists of four main sections:

### 1. Basic Learning Materials (`/learning_basics`)
- Interface definitions and usage
- Type systems and type aliases
- Union and intersection types
- Function types and implementations
- Generic types
- And more...

### 2. Sample Projects (`/sample_projects`)
- Calculator application
- E-commerce interface example
- Shape calculations
- Generic type implementations
- Union types practical usage

### 3. Homework (`/homework`)
Example problems prepared for practice:
- sample1.ts - sample5.ts

### 4. Learning Tips (`/tips`)
- Best practices
- Code organization
- Type safety recommendations
- And more...

## 🎯 Learning Path

1. **Beginner Level**
   - basic_interface_sample.ts
   - type_sample.ts
   - interface_samples.ts

2. **Intermediate Level**
   - interface_expand.ts
   - union_type_sample.ts
   - intersection_types.ts

3. **Advanced Level**
   - functiontypes_implementing_interface.ts
   - generic_types.ts
   - types_implementing_datastructure.ts

## 💡 Key Concepts

### Interface Usage
```typescript
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}
```

### Type Aliases
```typescript
type Result = number | string;
type Coordinates = [number, number];
```

### Generic Types
```typescript
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}
```

## 🚀 Getting Started

1. Clone the repository
2. Install TypeScript: `npm install -g typescript`
3. Review and run the files in sequence
4. Understand each example thoroughly
5. Complete the homework assignments

## 📝 Study Guidelines

1. **Sequential Progress**
   - Start with basic concepts
   - Test each example by running it
   - Master the concepts thoroughly

2. **Practice**
   - Complete assignments in the homework folder
   - Study examples in sample projects
   - Create your own variations

3. **Best Practices**
   - Read recommendations in the tips folder
   - Apply clean code principles
   - Pay attention to type safety

## 🎓 Learning Objectives

- Understanding TypeScript's type system
- Mastering interface and type usage
- Working with generic types
- Developing real-world applications
- Implementing type safety principles

## 🛠️ Requirements

- Node.js
- TypeScript
- A code editor (VS Code recommended)

## 📈 Progress Tracking

1. Review sample projects after learning each basic concept
2. Test yourself by completing homework assignments
3. Apply recommendations from the tips folder

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a pull request

## 📄 License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.