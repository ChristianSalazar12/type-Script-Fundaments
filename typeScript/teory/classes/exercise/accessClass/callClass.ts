import { Person } from "../accessClass/class";

let person = new Person("Alice", 30, "Engineer", ["Reading", "Traveling"], { street: "123 Main St", city: "Wonderland", country: "Fiction" });
console.log(person.name); // Accessible
console.log(person.getDetails()); // Accessible
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person.getAge()); // Error: Property 'getAge' is private and only accessible within class 'Person'.
// console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.
// console.log(person.getAddress()); // Error: Property 'getAddress' is protected and only accessible within class 'Person'