// Describing a product in an e-commerce application using TypeScript interface
// This interface includes properties like id, name, price, description, and imageUrl.
// The description property is optional.
// Example usage of the interface is also provided.

// Define the Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
    imageUrl: string;
}

// Example usage of the Product interface
const myProducts: Product = {
    id: 123,
    name: "Typescript T-Shirt",
    price: 19.99,
    imageUrl: "https://example.com/images/typescript-tshirt.png"
};

// Accessing properties of the Product object
console.log(myProducts.name, "Price:", myProducts.price);