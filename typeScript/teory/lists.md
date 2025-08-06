# Arrays of String Type in TypeScript

To create an array of strings in TypeScript, you can use the following syntax:

```typescript
let names: string[] = ["venta", "carro", "moto"];
console.log("names = ", names);
```

# Arrays of Number Type in TypeScript

To create an array of numbers in TypeScript, you can use the following syntax:

```typescript
let numbers: number[] = [10, 20, 30, 40];
console.log("numbers = ", numbers);
```

# Mixed Arrays with any[] in TypeScript

If you want an array that can contain values of any type, you can use the `any[]` type:

```typescript
let mixed: any[] = ["platzi", 100, true, null];
console.log("mixed = ", mixed);
```

# Arrays of Custom Interface Type

You can also create arrays of custom types using interfaces.  
For example, using an interface `Persona`:

```typescript
interface Persona {
  nombre: string;
  edad: number;
}

let personas: Persona[] = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 }
];

// Add a new person using push
personas.push({ nombre: "Luis", edad: 28 });

console.log("personas = ", personas);
```
## Tupla

A tupla (tuple) in TypeScript is a special type of array where you can define the types and order of the elements. Each position in the tuple has a fixed type.  
The tuple cannot be modified after its creation.

For example, you can create a tuple that contains a string, a number, and a boolean:

```typescript
const tupla: [string, number, boolean] = ["platzi", 100, true];
console.log("tupla = ", tupla);
// tupla[0] = 200; // Error: Type 'number' is not assignable to type 'string'.
```

## Enum

An `enum` (enumeration) in TypeScript is a special type that allows you to define a set of named constants. Enums are useful for representing a collection of related values, such as days of the week.

For example, you can define an enum for the days of the week:

```typescript
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let dia: DayOfWeek = DayOfWeek.Thursday
console.log(DaysOfWeek.Monday); // Output: 0
console.log(DaysOfWeek[3]);    // Thursday
```
## Another form of mixed array
without use any or unknown

```typescript
let mixedArray:(number | string)[] = [1,"dos",3];
```

