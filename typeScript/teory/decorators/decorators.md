# Decorators in TypeScript

Decorators are a special feature in TypeScript that allow you to add metadata or modify the behavior of classes, methods, properties, or parameters.  
They are prefixed with `@` and are commonly used in frameworks like Angular.

## How do decorators work?

Decorators are functions that are applied to classes or class members.  
They can be used to log information, validate data, inject dependencies, or change how code behaves at runtime.

## Example: Class Decorator

```typescript
function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class MyClass {
  // ...
}
```

- Note:
Decorators must be enabled in your tsconfig.json with "experimentalDecorators": true

## Example: Adding Attributes to a Class with a Decorator

Decorators can do more than just log information—they can add attributes, methods, modify existing ones, or even replace the entire class.

```typescript
function AddExtraProps(constructor: Function) {
  constructor.prototype.age = 25;      // New attribute
  constructor.prototype.city = "Pasto"; // Another attribute
}

@AddExtraProps
class Person {
  constructor(public name: string) {}
}

const p = new Person("Christian");

console.log(p.name); // Christian
console.log(p.age);  // 25
console.log(p.city); // Pasto
```

**Step by step:**
1. You declare the `Person` class with only one attribute (`name`).
2. The `@AddExtraProps` decorator runs and receives the class.
3. Inside the decorator, `age` and `city` are added to the prototype.
4. **Result:** Your class now has `name`, `age`, and `city`.

💡 **Key Note:**  
This modifies all instances of that class, because the attributes are added

## What is `prototype`?

In JavaScript and TypeScript, every class and function has a `prototype` object.  
The `prototype` is used to share properties and methods across all instances of a class.  
When you add a property or method to the prototype, every object created from that class will have access to it.

**In the decorator example above:**  
The decorator adds `age` and `city` to the `Person` class's prototype, so every instance of `Person` will have those properties, even though they were not defined in the class itself.

**Key Point:**  
Modifying the prototype affects all instances of the class, making it a powerful way to extend or change class behavior

## What is `target` in Decorators?

In TypeScript decorators, the `target` parameter refers to the object that the decorator is being applied to.  
Depending on the type of decorator (class, method, property, or parameter), `target` can represent:

- For **class decorators**: `target` is the constructor function of the class.
- For **method and property decorators**: `target` is the prototype of the class for instance members, or the constructor function for static members.
- For **parameter decorators**: `target` is also the prototype of the class.

**Example: Method Decorator**

```typescript
function LogTarget(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("Target:", target);
  console.log("Property:", propertyKey);
}

class Example {
  @LogTarget
  greet() {
    console.log("Hello!");
  }
}
```

## Decorator Types and Their Parameters

The number and type of parameters a decorator function receives depends on what you are decorating (class, method, property, etc.).

Here are the decorator types and the parameters they receive:

- **Class Decorator:**  
  `(target: Function)`

- **Property Decorator:**  
  `(target: any, propertyKey: string)`

- **Method Decorator:**  
  `(target: any, propertyKey: string, descriptor: PropertyDescriptor)`

- **Accessor Decorator (getter/setter):**  
  `(target: any, propertyKey: string, descriptor: PropertyDescriptor)`

- **Parameter Decorator:**  
  `(target: any, propertyKey: string)`

Each decorator type gives you access to different parts of the class or its members, allowing you to modify or add behavior




