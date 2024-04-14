// In JavaScript, data can belong to two different categories.
// Primitive value types or Reference types.

// Primitive types refer to simple, fundamental data.

// The 8 data types in JavaScript are
// string, number, BigInt, boolean, undefined, null, Symbol, and object.

// There are 3 ways to create a string literal.

// Initialize a string with single quotes
let favoriteFruit = 'strawberries';

// Initialize a string with double quotes
let favoriteIceCream = "chocolate";

// Initialize a string with backticks, ``.
// This creates a template literal which can be used for string interpolation.
let favoriteProgrammingLanguage = `JavaScript`;

// Assign to a number
let numberOfDonuts = 12;

// In JavaScript, the number data type, encompasses both integers and decimal values. 
let pi = 3.14;

// BigInt, ends with the character n, and this is for very large numeric values
let veryLargeNumber = 54389759347634976346n;

// The boolean data type holds the value of true or false.
let lovesCoding = true;

// undefined is the default value of a variable if we do not assign it.
let favoriteColor;

// Outputting it will display undefined
console.log(favoriteColor);

// The null data type, means value unknown or empty.
favoriteFruit = null;

// The Symbol data type, is used to create unique identifiers for objects

// The object data type, is known as a reference data type.
// So primitive values can only contain a single thing, such as a number or a string.
// But objects can have more complex structures and hold key-value pairs.
let course = {
    name: 'JavaScript for Beginners',
    hours: 3
};

// Also have the typeof operator, which will return the type of the operand
// The operand will be either a variable or a literal value.

console.log(typeof 3); // this will output, 'number'

console.log(typeof favoriteFruit); // this will output, 'string'

console.log(typeof 109234532525n); // this wil output, 'bigint'

console.log(typeof 'taco'); // this will output, 'string'

console.log(typeof null); // this will output, 'object'

// null, is not actually an object.
// This is from the early days of JavaScript,
// and it returns the value of 'object' for backwards compatibility