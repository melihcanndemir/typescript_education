// Define a User interface and create two user objects with different properties

interface User {
    name: string;
    age: number;
    email?: string;
}

const firstUser: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const secondUser: User = {
    name: "Bob",
    age: 25,
};

console.log(firstUser.name); // Output: Alice
console.log(firstUser.age); // Output: 30
console.log(firstUser.email); // Output: "alice@example.com"
console.log("---");
console.log(secondUser.name); // Output: Bob
console.log(secondUser.age); // Output: 25
console.log(secondUser.email); // Output: undefined
