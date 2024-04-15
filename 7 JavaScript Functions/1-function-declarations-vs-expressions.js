// Functions are the cornerstone in JavaScript serving as reusable functions.
// There are different ways to create a function.
// In this lesson we'll explore function-declaration syntax
// and function-expresson syntax.

// Function declaration syntax
function sayHi() {
    console.log('Hi');
}

sayHi();

// Function expression syntax
// End the curly braces with a semi-colon and utilize an anonymous function.
const sayHello = function() {
    console.log('Hello');
};

sayHello();

const greeting = function sayBye() {
    console.log('Bye');
}

greeting();