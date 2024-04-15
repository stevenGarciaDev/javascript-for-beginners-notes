// The function declaration syntax and function expression syntax
// differ because of the concept of hoisting.
// Hoisting is a process where the JavaScript engine moves all 
// function declarations to the top of their enclosing scope.

// With function declaration syntax, we can call/invoke a function 
// before it is defined due to hoisting.

add(2, 2);

function add(num1, num2) {
    return num1 + num2;
}

// Hoisting doesn't apply with function expression syntax,
// so you cannot call/invoke a function before it is defined.

let multiply = function(num1, num2) {
    return num1 * num2;
}

multiply(2, 3);