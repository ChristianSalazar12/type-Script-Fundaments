"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, occupation, hobbies, address) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.hobbies = hobbies;
        this.address = address;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Occupation: ").concat(this.occupation || 'N/A', ", Hobbies: ").concat(this.hobbies ? this.hobbies.join(', ') : 'None', ", Address: ").concat(this.address ? "".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.country) : 'Not provided');
    };
    return Person;
}());
exports.Person = Person;
// This class represents a person with optional properties for occupation, hobbies, and address.
// It includes a method to get a formatted string of the person's details.
// The constructor initializes the properties, and the getDetails method returns a string summarizing the person's information.
