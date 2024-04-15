// There is another way to combine two arrays.
// Which is to utilize the spread operator.

// So the spread operator can be used
// to copy the properties of an object or the elements of an array.

const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

// So rather than doing
// let combined = exampleNumbersA.concat(exampleNumbersB);
// Below is the more commonly used syntax.

let combined = [...exampleNumbersA, ...exampleNumbersB];
console.log(combined);

combined = [...exampleNumbersA, 9, ...exampleNumbersB, 10];

// Arrays are objects, meaning that they are passed by reference.
let a = [1, 2];
let b = a;

// So we could also use the spread operator in order to make a copy of an array.
b = [...a];