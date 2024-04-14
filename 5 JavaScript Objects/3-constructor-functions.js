// So we know that the object literal syntax creates one object.
// We can easily use factory functions and have it return an object.
// Factory functions provide an efficient and reusable way to create new objects
// which the same state and behavior. (properties and methods)

// However factory functions are not the common way of achieving this,
// rather we use constructor functions.

// Constructor functions construct the initial state of an object.
// We name our constructor functions using PascalNotation.
// We would name our constructor function as a noun, rather than a verb.
// Then we utilize the 'this' keyword, as in 'this current object'
// to set the state and behavior. (properties and methods)

function Dog(name, breed, age, weightInPounds) {
    // this is done internally
    // this = {};

    // Add properties to this object
    this.name = name;
    this.breed = breed;
    this.age = age;

    // Add methods to this object

    this.eat = function() {
        console.log(this.name + ': Chomp!');
    },

    this.bark = function() {
        console.log(this.name + ': Woof!');
    }

    // this is done internally
    // return this;
}

// To call the constructor function, we use a special keyword, new.
// So we would say that we, instantiated a new Dog object in memory.
// The new keyword, creates an empty JavaScript object.
// It then sets the new keyword to reference this object in memory.
// Then it returns the this keyword.

// The goal of a constructor function is to instantiate/initialize an object
// with an initial state. (set by the arguments passed to the parameter variables)

const anotherDog = new Dog('Marley', 'Chocolate Lab', 3, 60);