// The .map() method is a cornerstone of array manipulation.
// It's a powerful way to process and transform array elements.

// It operates on each element of an array,
// applying a function that you specify, and returns a new array composed of the results.

// So it allows you to transform data without altering the original array.

const numbers = [2, 4, 6, 8, 10];
const squaredNumbers = numbers.map(num => num * num);
console.log('squaredNumbers ', squaredNumbers);

const characters = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters.map(char => char.toUpperCase());
console.log('upperCaseCharacters', upperCaseCharacters);

const employees = [
    { id: 1, name: 'Alice', email: 'AliCe@gmail.com' },
    { id: 2, name: 'Steven', email: 'STeVen@gmail.com' },
    { id: 3, name: 'Joe', email: 'Joe@gmail.com' },
];

const updatedEmployees = employees.map(employee => ({
    ...employee,
    email: email.toLowerCase()
}));