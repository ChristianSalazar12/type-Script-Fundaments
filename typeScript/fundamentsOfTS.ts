//Javascript is from 1995 

//example of basic types in TypeScript

//javaScript
var names  = "John"; // string
var age = 30; // number

var result = names + age; // string concatenation
console.log(result); // Output: John30

// TypeScript
let namet: string = "John"; // string type
let aget: number = 30; // number type
let resultt: string = namet + aget.toString(); // convert number to string for concatenation
console.log(resultt); // Output: John30


class Person {
  name: string;
  age: number;
  isDeveloper: boolean;

  constructor(name: string, age: number, isDeveloper: boolean) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }

  saludar():string {
    return `Hi, my name is ${this.name} and i'm ${this.age} años`;
  }
}

const person1 = new Person("Ana", 30, true);
console.log(person1.name); // "Ana"
console.log(person1.age);  // 30
console.log(person1.saludar())