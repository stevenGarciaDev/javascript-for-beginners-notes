// Expressions are evaluated from left to right.
// When using logical operators with non-boolean values,
// rather than returning the value of true or false,
// it will return the value of the operand.

// so in the case of || (or operator)
console.log(false || 'Steven'); // returns 'Steven'

// So since 'Steven' is evaluated to truthy, it will be the value returned
// the OR operator returns the first truthy value

// The falsy values in JavaScript are...
// undefined, null, 0, false, '', NaN
// anything else that doesn't fall in this category is considered truthy

console.log(false || 1 || 2); // returns 1
// The JavaScript OR operator, ||, performs short-circuit evaluation.
// Meaning it stops the expression once it can evaluate to 'truthy' or 'falsy'.

// Another example
let usersChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor = usersChosenColor || defaultColor;