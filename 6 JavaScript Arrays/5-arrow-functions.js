// Previously we used the function syntax for the callback function for the find() method

const employees = [
    {
        id: 1,
        name: 'Jim',
    },
    {
        id: 2,
        name: 'Michael Scott',
    },
    {
        id: 3,
        name: 'Pam',
    },
];

// We pass a callback function which in this case is a predicate function.
// A predicate function is one which returns a boolean value (true or false).
// Here we use the arrow function syntax.

// So .find() returns the first element that matches

let employee = employees.find(e => e.name === 'Jim');

// When you have an arrow function that has just one statement in the code block,
// then you can put everything on one line.
const add = (num1, num2) => {
    return num1 + num2;
}

// const add = (num1, num2) => num1 + num2;