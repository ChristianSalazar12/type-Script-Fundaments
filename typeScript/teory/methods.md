# Functions in TypeScript

In TypeScript, functions allow you to group code that performs a specific task. You can define functions with or without parameters, and specify the return type.

## Example 1: Function without parameters and return

```typescript
function printMessage(message:string): void {
  console.log(message);
}

printMessage("hola,como estas"); //wait how input a string
```

## Example 2: Function with parameters and return

```typescript
function suma(a: number, b: number): number {
  return a + b;
}
let result : number = sumar(5,3);//using a variable
console.log(result);
consolo.log(`Tu resultado es: ${sumar(5,3)}`); // this another option 
```

# Optional Parameters

In TypeScript, you can define optional parameters in a function by adding a question mark `?` after the parameter name. Optional parameters are not required when calling the function.

## Example: Function with Optional Parameters

```typescript
function greet(name: string, greeting?: string): void {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("Juan"); // Output: Hello, Juan!
greet("Ana", "Good morning"); // Output: Good
```

# Multiple Parameters

In TypeScript, you can define functions that accept multiple parameters. You can also use the rest operator (`...`) to accept an unlimited number of arguments as an array.

## Example: Function with Multiple Parameters

```typescript
function sumAll(...numbers: number[]): number {
  // The reduce method iterates over the array and accumulates the sum of all elements, remplace the forwich.
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(5, 10, 15, 20));
```
## default values

# Function Overloading

In TypeScript, function overloading allows you to define multiple signatures for a function, but only one actual implementation. This is useful when you want a function to accept different types or combinations of parameters and return different results based on the input.

## Example: Function Overloading

```typescript
// Function signatures
function greet(name: string): string;
function greet(names: string[]): string;

// Function implementation
function greet(param: string | string[]): string {
  if (typeof param === "string") {
    return `Hello, ${param}!`;
  } else {
    return `Hello everyone: ${param.join(", ")}!`;
  }
}

// Usage
console.log(greet("Juan"));           // Hello, Juan!
console.log(greet(["Ana", "Luis"])); // Hello everyone: Ana, Luis!
```
