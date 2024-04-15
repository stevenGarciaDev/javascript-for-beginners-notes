// Global scope, so a variable declared outside any function block or conditional
// has a global scope. 
// Meaning that it is accessible from any part of the code after its declaration.

// This variable is declared in the global scope.
const name = 'Steven';
console.log(name);

// Local scope refers to variables declared within blocks, functions, or conditionals.
// So these variables are only accessible within the confines
// of their curly braces.

{
    let lastName = 'Garcia';
    console.log(lastName);
}

// however we can't access the variable, lastName, outside of the code block

function greet() {
    // So the variable, message, is a local variable
    const message = 'Hello World';
    
    console.log(message);
}

greet();

// can't access the variable, message, outside of the function block
