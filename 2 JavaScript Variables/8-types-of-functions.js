// Functions are a building block in our programs.
// They enable us to group together a block of code,
// which is a set of statements defined within curly braces.

// We create a function for one of two options.
// The first option is to perform some action.
// The second option is to calculate and return some value.

// So not all functions require us to explicitly use the return keyword.
// By default if we don't supply an explicit return value,
// then JavaScript will have the function return the value undefined.

function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply(2, 2) );

// If we don't specify a return keyword, then JavaScript will return undefined by default.
function add(num1, num2) {
    const sum = num1 + num2;
}

console.log( add(3, 3) );