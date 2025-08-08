//Javascript is from 1995 
//example of basic types in TypeScript
//javaScript
var names = "John"; // string
var age = 30; // number
var result = names + age; // string concatenation
console.log(result); // Output: John30
// TypeScript
var namet = "John"; // string type
var aget = 30; // number type
var resultt = namet + aget.toString(); // convert number to string for concatenation
console.log(resultt); // Output: John30
var Person = /** @class */ (function () {
    function Person(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
    Person.prototype.saludar = function () {
        return "Hi, my name is ".concat(this.name, " and i'm ").concat(this.age, " a\u00F1os");
    };
    return Person;
}());
var person1 = new Person("Ana", 30, true);
console.log(person1.name); // "Ana"
console.log(person1.age); // 30
console.log(person1.saludar());
