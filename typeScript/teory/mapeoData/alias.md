# Types in TypeScript

Types are a way to define aliases or data structures that can be reused in your code. Unlike interfaces, types are more flexible and can represent a wide variety of structures, such as unions, intersections, primitive types, and more.

## When to use `type`?

- When you need unions, intersections, or conditional types.
- To define aliases for primitive types or complex structures.
- When working with functions or tuples.
- In scenarios where flexibility is more important than extensibility.

---

## Example: Defining a Type

```typescript
type TypePerson = {
  name: string;
  age: number;
};
```
This defines a reusable type alias TypePerson for an object with name and age properties.

---

## Example: Using a Class

```typescript
class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```
This defines a class PersonClass that can be used to create objects with name and age properties, and allows you to add methods and logic.

---

## Example: Mapped Types

Mapped types allow you to create new types by transforming properties of an existing type.

```typescript
type Parcial<T> = {
  [P in keyof T]?: T[P];
};
```
This `Parcial<T>` type makes all properties of type `T` optional.  
For example:

```typescript
type TypePerson = {
  name: string;
  age: number;
};

type PartialPerson = Parcial<TypePerson>;
// Equivalent to: { name?: string; age?: number; }
```

---

## Another Example: Readonly Mapped Type

You can also create a mapped type that makes all properties of a type `readonly`:

```typescript
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

This `ReadOnly<T>` type makes all properties of type `T` immutable (cannot be changed after assignment).

**Example:**

```typescript
type TypePerson = {
  name: string;
  age: number;
};

type ReadOnlyPerson = ReadOnly<TypePerson>;
// Equivalent to: { readonly name: string; readonly age: number; }

let person: ReadOnlyPerson = { name: "Alice", age: 30 };
// person.name = "Bob"; // ❌ Error: Cannot assign to 'name' because it is a read
```

---

### Differences between type and class

#### type:
- Only defines the structure (shape) of data.
- Cannot have methods or logic.
- Used for type checking and type aliases.
- More flexible for unions, intersections, and complex types.

#### class:
- Defines both structure and behavior (can have methods and logic).
- Can be instantiated with new.
- Supports inheritance and encapsulation.
- Used to create objects and manage their behavior.

## Template Literal Types 
```typescript
type Variantes = "small" |  "medium" | "big";

type ClassCSS = `boton-${Variantes}`;
//complemeta una type con un type class.

//let botonPequeño: ClassCSS = "boton-pequeño";
```
## Conditional Types
```typescript
type EsNumero<T> = T extends number ? true :false;

// En este caso el ? esta haciendo como un if, donde evalua que si number cumple con la primera condition o sino la segunda.

function esNumero<T>(valor:T): EsNumero<T>{
return (typeof Valor ==='number') as EsNumero<T>;
}

const resultado1 = esNumero(42);
console.log(resultado1);
```


