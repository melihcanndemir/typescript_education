// Example TypeScript code demonstrating interfaces and classes
// Description: This code defines a Shape interface and implements it in Circle and Rectangle classes.
// It then creates instances of these classes and logs their areas.

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {}
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    getArea() { return this.width * this.height; }
}

const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

console.log("Radius of Circle:", myCircle.getArea()); // Output: Area of Circle
console.log("Area of Rectangle:", myRectangle.getArea()); // Output: Area of Rectangle