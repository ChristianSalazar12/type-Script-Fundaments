# Special Types in TypeScript

In TypeScript, `any`, `unknown`, `never`, and `void` are special types that help you manage data in different ways:

## any
The `any` type allows you to assign any data type to a variable.  
For example:
```typescript
let variable: any;
variable = "hello";
variable = 42;
variable = true;
```

## unknown
The `unknown` type is similar to `any`, but it requires you to perform some type of checking before performing operations on the data.  
For example:
```typescript
let value: unknown = "Platzi";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

## never
The `never` type represents values that never occur. This can be useful for function return types that always throw an error or never complete.  
For example:
```typescript
function error(message: string): never {
  throw new Error(message);
}
```

## void
The `void` type is used to indicate that a function does not return a value.  
For example:
```typescript
function logMessage(message: string): void {
  console.log(message);
}
```