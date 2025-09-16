// Define an interface for a person object

interface Person {
    name: string;
    surname: string;
    age?: number; // age is optional
}

const person1: Person = {
    name: "John",
    surname: "Doe",
};

const person2: Person = {
    name: "Jane",
    surname: "Smith",
    age: 30,
};

console.log(person1);
console.log(person2);