// We have eight different data types in JavaScript
// Which include 7 primitive data types, which include
// number, string, boolean, BigInt, undefined, null, and Symbol

// The eight data type are objects
// Arrays and functions fall into the object category

// The reason we differentiate the data types is because of how they are allocated in memory.

// So when working with primitive values, they are passed by copy.
// Meaning that if you were to assign a variable to an existing variable (containing a primitive value)
// Then that new variable would be given a copy of that primitive value.
// Then changing one of the variables won't affect the other variable.
// This is because they are two different variables and are assigned to different memory addresses.

let a = 10;
let b = a;

a = 20;

console.log(a); // 20
console.log(b); // 10

// Now consider references types
a = { value: 20 };
b = a;

a.value = 100;

console.log(a); // 100
console.log(b); // 100

// So they have the same value, this is because objects are passed by reference.
// Both of the variables a and b are assigned to the same object in memory (the same memory address)

// So to summarize
// Primitive values are copied by their value.
// Objects are copied by reference.