// What are the key differences between types and interfaces? In which situations is it more appropriate to use types, and in which situations is it more appropriate to use interfaces? Explain briefly.

// Here are the key differences between types and interfaces:

// 1. Definition Method:
//    - Type: Defined using type aliases. For example, `type MyType = { ... }`.
//    - Interface: Defined using the interface keyword. For example, `interface MyInterface { ... }`.

// 2. Union and Intersection:
//    - Type: Can be used to define union and intersection types. For example, `type A = B | C` or `type A = B & C`.
//    - Interface: Used only for defining object types. Not suitable for union types.

// 3. Extension:
//    - Type: Type aliases cannot be extended, but a similar effect can be achieved using intersection types.
//    - Interface: An interface can extend another interface. For example, `interface B extends A { ... }`.

// 4. Declaration Merging:
//    - Type: Multiple type aliases cannot be defined with the same name.
//    - Interface: Multiple interfaces can be defined with the same name and they will be automatically merged (declaration merging).

// When to use types vs interfaces?
// - Interfaces are more suitable when defining object types and when extension is needed.
// - Types are more suitable when defining union or intersection types.
// - Types are more practical for simple types (e.g., union or primitive types).
// - Interfaces should be preferred for complex object structures and extension requirements.

// The following files contain examples of type and interface usage:

// 1. union_type_sample.ts
/* type Result = number | string;
function process(a: number, b: number): Result {
    // ...
}

// 2. intersection_types.ts
type WorkerInfo = Employee & Department;

// 3. generic_types.ts
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

// 4. e-commerce_interface.ts
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
    imageUrl: string;
}

// 5. shape.ts
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {}
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// 6. working_union_types.ts
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): void {
    if (typeof value === 'string') {
        console.log("Value is String:", value.toUpperCase());
    }
    else {
        console.log("Value is Number:", (value * 2));
    }
}

// 7. types_implementing_datastructure.ts
type Result<T> = { success: true; data: T } | { success: false; error: string; };

// 8. real_world_implementation_sample.ts
async function getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return data as Post[];
}

// As seen in the examples above, interfaces are used for object structures and extension requirements,
// while types are used for union types and generics.

*/