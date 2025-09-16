// Define a type for a point in 2D space

type Coordinates = {
    x: number;
    y: number;
};

type Identity = string | number;

const point: Coordinates = {
    x: 10,
    y: 20
};

const id1: Identity = "user123";
const id2: Identity = 456;

console.log(point); // Output: { x: 10, y: 20 }
console.log(point.x); // Output: 10
console.log(point.y); // Output: 20
console.log(id1); // Output: user123
console.log(id2); // Output: 456