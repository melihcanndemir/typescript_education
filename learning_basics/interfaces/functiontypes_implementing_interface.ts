// Define an interface for a user object
// and a function type that formats the user information.

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const myUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

// Function type interface
interface FormatUser {
    (user: User): string;
}

const formatUser: FormatUser = (user: User) => {
    return `${user.name} (${user.email}) - Active: ${user.isActive}`;
};

console.log(formatUser(myUser))