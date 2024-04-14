// For checking for equality, we can do so through...
// Loose equality, which uses ==
// Strict equality, which uses ===

let a = 2;
let b = '2';

// Loose equality evaluates this comparison to be truthy.
// Loose equality doesn't check if the data types are the same.
// JavaScript will perform type coersion with loose equality, converting the data types to be the same before comparing
console.log(a == b); // true

// Strict equality returns true if the data types are the same and the the values are the same.
console.log(a === b); // false

console.log(true == '1'); // true

// Stick to strict equality and use === for equality comparisons.