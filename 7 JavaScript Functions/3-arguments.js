function multiply(num1, num2){
    return num1 * num2;
}

console.log( multiply(2, 2) );

// but if we were to call this function and only supply one argument

console.log( multiply(2) ); // NaN

// If we don't supply an argument, then that parameter will be assigned the value of undefined.

// You could also pass in more arguments than there are parameter variables defined.
// To access those arguments, you could use the built in arguments object.
// Every function in JavaScript has access to a special function named arguments.
// So we just need to iterate over the arguments object.

function add(num1, num2) {
    console.log(arguments);
    let product = 1;
    for (const num of arguments)
        product *= num;

    return product;
}

console.log( add(1, 2, 3, 4) );