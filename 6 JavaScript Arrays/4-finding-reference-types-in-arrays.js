// So the employees object stores 3 objects/reference types.
// When dealing with reference types, we can use the indexOf(), lastIndexOf(), or includes()
// methods built into arrays in order to find an element.

// As if you compare two different objects, even if they have the same property values,
// they won't be equal and it would be comparing their memory addresses, which differ.

// Rather we would have to use .find(), .findIndex(), and pass in a predicate callback function
// as the argument.

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

// So .find() returns the first element that matches

let employee = employees.find(function(e) {
    return e.name === 'Jim'
});
