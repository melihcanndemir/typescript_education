// basic_interface_sample.ts
// This TypeScript code demonstrates the use of interfaces to define the shape of an object.

interface Rectangle {
    width: number;
    height: number;
}

function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
}

const myRect: Rectangle = {
    width: 5,
    height: 10
};

console.log(calculateArea(myRect)); // Output: 50