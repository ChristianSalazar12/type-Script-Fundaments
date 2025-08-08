# Classes in TypeScript

Classes are a way to structure and organize object-oriented code in TypeScript. They allow you to define objects with properties and methods, making code reuse and maintenance easier.

## What is a constructor?

The constructor is a special method inside a class that runs automatically when a new instance of the class is created. Its main purpose is to initialize the object's properties.

**Example:**

```typescript
class Person {
  name: string;
  age: number;
  isDeveloper: boolean;

  constructor(name: string, age: number, isDeveloper: boolean) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }

  saludar(): string {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old`;
  }
}

const person1 = new Person("Ana", 30, true);
console.log(person1.name); // "Ana"
console.log(person1.age);  // 30
console.log(person1.saludar());
```

In this example, the constructor receives the parameters `name`, `age`, and `isDeveloper`, and assigns them to the class properties using `this`.

> **Note:**  
> If you want to use your class in other files, you should use the `export` keyword before the class declaration:
> 
> ```typescript
> export class Person {
>   // class body
> }
> ```
> This allows you to import and reuse the class in different modules, making your code more modular and maintainable.

---

## Example: Exporting and Importing a Class

You can define a class in one file and use it in another by exporting and importing it. Here’s a practical example:

**exportClass.ts**
```typescript
// This class represents a person with optional properties for occupation, hobbies, and address.
// It includes a method to get a formatted string of the person's details.
// The constructor initializes the properties, and the getDetails method returns a string summarizing the person's information.

export class Person {
    name: string;
    age: number;
    occupation?: string;
    hobbies?: string[];
    address?: {
        street: string;
        city: string;
        country: string;
    };

    constructor(name: string, age: number, occupation?: string, hobbies?: string[], address?: { street: string; city: string; country: string }) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.hobbies = hobbies;
        this.address = address;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation || 'N/A'}, Hobbies: ${this.hobbies ? this.hobbies.join(', ') : 'None'}, Address: ${this.address ? `${this.address.street}, ${this.address.city}, ${this.address.country}` : 'Not provided'}`;
    }
}
```

**implementation.ts**
```typescript
// This code imports the Person class from exportClass.ts, creates an instance of it with sample data, and logs the person's details to the console.
// The Person class includes properties for name, age, occupation, hobbies, and address, with a method to get a formatted string of the person's details.
// The example demonstrates how to create an instance of the class and use its method to display information about the person.

import { Person } from './exportClass';

let person = new Person('John Doe', 30, 'Software Engineer', ['Reading', 'Hiking'], { street: '123 Main St', city: 'Anytown', country: 'USA' });
console.log(person.getDetails());
```


# Methods in Classes

In TypeScript, you can control the accessibility of class members (properties and methods) using access modifiers:

- **public**: Members are accessible from anywhere. This is the default.
- **private**: Members are only accessible within the class itself.
- **protected**: Members are accessible within the class and its subclasses.

**Example:**

```typescript
class Example {
  public publicProperty: string;      // Accessible everywhere
  private privateProperty: string;    // Accessible only inside this class
  protected protectedProperty: string; // Accessible in this class and subclasses

  constructor() {
    this.publicProperty = "I am public";
    this.privateProperty = "I am private";
    this.protectedProperty = "I am protected";
  }

  public publicMethod() {
    console.log(this.publicProperty);
  }

  private privateMethod() {
    console.log(this.privateProperty);
  }

  protected protectedMethod() {
    console.log(this.protectedProperty);
  }
}

class SubExample extends Example {
  constructor() {
    super();
    // this.privateProperty; // Error: not accessible
    console.log(this.protectedProperty); // OK: accessible in subclass
  }
}

const ex = new Example();
console.log(ex.publicProperty); // OK
// console.log(ex.privateProperty); // Error
// console.log(ex.protectedProperty); // Error
```

Use these modifiers to encapsulate and protect your class members, ensuring they are accessed and modified only in intended ways.

**Example: Using `private` for Database Connection**

A common use case for the `private` modifier is to protect sensitive data or implementation details, such as a database connection, so it cannot be accessed or modified from outside the class.

```typescript
class DatabaseService {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public connect(): void {
    // Simulate connecting to a database using the private connection string
    console.log(`Connecting to database with: ${this.connectionString}`);
  }

  // Private method for internal use only
  private logConnection(): void {
    console.log('Connection logged internally.');
  }
}

const db = new DatabaseService('mongodb://localhost:27017/mydb');
db.connect(); // OK
// db.connectionString; // Error: Property 'connectionString' is private and only accessible within class 'DatabaseService'
// db.logConnection(); // Error: Method 'logConnection' is private and only accessible within class 'DatabaseService'
```

In this example, the `connectionString` property and `logConnection` method are marked as `private`, so they cannot be accessed from outside the `DatabaseService` class. This helps keep sensitive information and implementation details safe from external access and modification.
