// Educational example of defining and using an interface in TypeScript

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const myUser: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true
};

console.log(myUser.id); // Output: 1
console.log(myUser.name); // Output: John Doe
console.log(myUser.email); // Output: johndoe@example.com
console.log(myUser.isActive); // Output: true
