# Interfaces in TypeScript

An interface in TypeScript is a way to define the structure of an object. It specifies the properties and their types that an object should have. Interfaces help ensure that objects follow a specific shape, making your code more robust and easier to maintain.



## Example: Persona Interface

```typescript
interface Persona {
  name: string;
  age: number;
  isDeveloper: boolean;
};

const person: Persona = {
  name: "Juan",
  age: 30,
  isDeveloper: true;
};
```

An interface can also define methods that objects must implement.
```typescript
let personas: Persona[] = [
  { name:"Vanessa", age: 22,isDeveloper: True },
  { name:"Carlos", age: 24,isDeveloper: False }
];

interface Sum{
    (a:number, b: number):number; //def all parameters
}
let sum: Sum = (a:number,b: number): number =>{
 return a+b;
}
console.log("resultado: ", sum(5,4));
```

> **Note:**  
> The main difference between an interface and a class in TypeScript is that interfaces only define the structure of objects and should not contain logic. Classes, on the other hand, can include both structure (properties) and logic (methods).  
> Interfaces are ideal for defining contracts that classes must follow, helping keep your code clean and organized.

## Example: Interface vs Class

```typescript
// Interface: only defines structure
interface Animal {
  name: string;
  makeSound(): void;
}

// Class: defines structure and logic
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output:
```

## Interface Properties

TypeScript interfaces support special property modifiers and features:

### 1. `readonly` Property

The `readonly` modifier makes a property immutable after initialization.  
**Example:**

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

### 2. Optional Properties

Properties in an interface can be marked as optional using the `?` suffix.  
**Example:**

```typescript
interface Product {
  name: string;
  price?: number; // Optional property
}

const item1: Product = { name: "Book" };
const item2: Product = { name: "Pen", price: 2 };
```

### 3. Extending Interfaces

Interfaces can extend other interfaces, inheriting their properties.  
**Example:**

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const pet: Dog = { name: "Max", breed: "Golden Retriever" };
```
