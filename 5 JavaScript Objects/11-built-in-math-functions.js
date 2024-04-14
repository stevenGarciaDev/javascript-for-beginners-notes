// In JavaScript, we have a built-in class called Math
// This has static helper methods to help us do mathematical calculations.
// It is often utilized in programming interviews.
// Refer to the documentation at developer.mozilla.org since there are many built in methods

// Some of the most commonly used built-in methods

console.log( Math.round(3.14) ); // will round the number to 3 

console.log( Math.round(3.6) ); // will round the number to 4

console.log( Math.floor(4.6) ); // 4

console.log( Math.ceil(4.2) ); // 5

console.log( Math.max(1, 2) );

console.log( Math.max(1, 2, 3, 4, 5) );

console.log( Math.min(1, 2, 3) );

console.log( Math.pow(2, 3) );

console.log( Math.sqrt(25) );

console.log( Math.random() ); // returns a decimal value between 0 and 1

// to return a value between a range
let min = 1;
let max = 10;

const randomNum = Math.random() * (max - min) + min;

// To make it an integer value
const randomIntNum = Math.round( Math.random() * (max - min) + min );

console.log(randomNum);