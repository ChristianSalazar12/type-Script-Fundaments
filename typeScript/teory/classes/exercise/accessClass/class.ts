export class Person {
    public name: string; // Accessible from outside the class
    private age: number; // Accessible only within the class
    private occupation?: string;
    private hobbies?: string[];
    protected address?: { // Accessible in this class and subclasses
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
    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation || 'N/A'}, Hobbies: ${this.hobbies ? this.hobbies.join(', ') : 'None'}, Address: ${this.address ? `${this.address.street}, ${this.address.city}, ${this.address.country}` : 'Not provided'}`;
    }
    protected getAddress(): string {
        return this.address ? `${this.address.street}, ${this.address.city}, ${this.address.country}` : 'Not provided';
    }
    private getAge(): number {
        return this.age;
    }
}