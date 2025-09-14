// What is the usage of the readonly keyword in TypeScript interfaces and types? Explain with an example.

// The readonly keyword in TypeScript is used to specify that a property or variable is read-only. This means that the value of the property or variable cannot be changed after it is defined. This feature is particularly useful when used in interfaces and types to maintain data integrity and prevent accidental modification of values.

// Example:
interface User {
    readonly id: number; // This property is read-only
    name: string;
}

const user: User = { id: 1, name: "Alice" };
console.log(user.id); // 1
user.name = "Bob"; // This is valid
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// In the example above, the `id` property in the `User` interface is defined as `readonly`. Therefore, the value of the `id` property cannot be changed after the `user` object is created. However, the `name` property can be modified. This ensures that the `id` value remains constant and prevents it from being accidentally changed.
