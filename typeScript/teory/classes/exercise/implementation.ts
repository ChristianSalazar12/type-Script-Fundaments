import { Person } from './exportClass';

let person = new Person('John Doe', 30, 'Software Engineer', ['Reading', 'Hiking'], { street: '123 Main St', city: 'Anytown', country: 'USA' });
console.log(person.getDetails());

// This code imports the Person class from exportClass.ts, creates an instance of it with sample data, and logs the person's details to the console.
// The Person class includes properties for name, age, occupation, hobbies, and address, with a method to get a formatted string of the person's details.
// The example demonstrates how to create an instance of the class and use its method to display information about the person.
