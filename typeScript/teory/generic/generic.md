# Generics in TypeScript

Generics allow you to create reusable components (functions, classes, or interfaces) that work with any data type, while still maintaining type safety. They are useful when you want to write code that can handle different types without losing the benefits of static typing.

> **Note:**  
> "I don't know exactly what type I'll use yet, but I'll know later, and when I do, I want you to respect that type throughout

## Generic Function Example

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Platzi")); // Output: Platzi
console.log(identity<number>(42));       // Output: 42
```

## Generic Interface

A generic interface in TypeScript allows you to define the structure of an object where one or more property types are flexible and determined when the interface is used. This makes your code reusable and type-safe for different data types.

**Example:**

```typescript
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };
```

## Generic Class

A generic class in TypeScript allows you to create a class that can work with any data type. You define a type parameter (like `<T>`) that will be replaced with a specific type when you create an instance of the class. This makes your class reusable and type-safe for different types.

**Example:**

```typescript
class DataStore<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  public getAll(): T {
    return this.content;
  }
}

const numberStore = new DataStore<number>(3);
console.log(numberStore.getAll()); // Output: 3

const stringStore = new DataStore<string>("Platzi");
console.log(stringStore.getAll()); // Output: Platzi
```

## Why Use Generics?

Generics are useful because they allow you to write flexible, reusable, and type-safe code. Instead of duplicating code for different data types, you can use generics to handle any type while still getting the benefits of TypeScript's static type checking.

**Benefits of using generics:**
- **Reusability:** Write a function, class, or interface once and use it with any type.
- **Type Safety:** TypeScript checks that you use the correct types, reducing runtime errors.
- **Flexibility:** You can work with different types without losing information about those types.

**Example:**
If you want a function that returns whatever you give it, you could write separate functions for strings, numbers, etc. With generics, you write one function that works for all types, and TypeScript ensures you respect the type you will use later.

# another explain
 
![alt text](image-1.png)