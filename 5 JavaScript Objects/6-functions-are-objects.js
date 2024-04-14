// Functions are objects in JavaScript

// So this function is an object in memory
function add(num1, num2) {
    return num1 + num2;
}

// So now n references this object in memory, the function named add.
const n = add;

console.log( n(2, 2) );

// So the function named add, has members.
// Meaning that it has properties and methods.

// This will output the number of parameters that the add function has.
console.log( add.length );

// This constructor function is an object in memory
function Programmer(name) {
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JavaScript');
    }
}

console.log( Programmer.length ); // 1 parameter
console.log( Programmer.constructor ); // references the constructor function

// To futher demonstrate how functions are objects in JavaScript
const ProgrammerFunc = new Function('name', `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JavaScript');
    }
`);

const newProgrammer = new ProgrammerFunc('Steven');
newProgrammer.writeCode();

