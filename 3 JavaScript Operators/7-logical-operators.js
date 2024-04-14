// We use logical operators to make decisions based on multiple conditions.
// There are 4 logical operators which include:
// || (or operator)
// && (and operator)
// !  (not operator)
// ?? (null coalesing)

// These can be applied to values of any type, not just boolean values.
// Expressions are evaluated from left to right.

// Consider the four possible logical combinations that can be made when working with two operands.
// So as long as one is true, then it will return true.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// An example of the ||, or operator 
let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;

console.log('hasAccessToTable', hasAccessToTable);

// &&, the AND operator
// This returns true if all the operands being evaluated are truthy.
// Consider the four possible logical combinations that can be made when working with two operands.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let age = 16;
let hasCar = true;
const canDrive = age >= 16 && hasCar;

console.log('canDrive', canDrive);

// Another example
let a = true, b = true, c = true, d = true;

console.log(a && b || c && d);

// Same as...
console.log((a && b) || (c && d));

// !, the NOT operator
// This will return the inverse of the operand.
console.log(!true); // false

// Another example
let isClosedOnSunday = true;

const isRestaurantOpen = !isClosedOnSunday;

console.log(isReservaationOpen);

// ??, nullish coalescing operator
// So if a value is null or undefined, then we can supply a default value.

let doesValueExist = null;
const result = doesValueExist ?? false;

// So the ?? operator is syntactic sugar for...
const resultOfExpression = (a !== null && a !== undefined) ? a : false;