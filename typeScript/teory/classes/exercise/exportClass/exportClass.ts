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
// This class represents a person with optional properties for occupation, hobbies, and address.
// It includes a method to get a formatted string of the person's details.
// The constructor initializes the properties, and the getDetails method returns a string summarizing the person's information.