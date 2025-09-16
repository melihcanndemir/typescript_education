// Define a base interface for shapes
// Educational example of interface extension

interface Shape {
    color: string;
}

interface Rectangle extends Shape {
    width: number;
    height: number;
}

const rect: Rectangle = {
    color: "blue",
    width: 15,
    height: 25
};

console.log(rect.color);  // blue
console.log(rect.width);  // 15
console.log(rect.height); // 25