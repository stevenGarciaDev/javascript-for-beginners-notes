// One of the most versatile built in methods for arrays in JavaScript
// is the filter method.

// This method is designed to go through an array and extract elements 
// that meet a specific condition.
// Returning a new array comprised of only those elements.

// It's useful for creating subsets of an array that match certain criteria.

const numbers = [1, 2, 3, 4, 5, 6];

// So you pass in a callback predicate function as an argument.
// Once again, predicate functions are functions that return a boolean value. (true or false)
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const employees = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Manager' },
    { id: 4, name: 'Danielle', role: 'Developer' },
];

const developers = employees.filter(employee => employee.role === 'Developer');
console.log(developers);