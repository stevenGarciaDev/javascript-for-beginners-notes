// Previously we covered the spread operator which is used for cloning objects in JavaScript.
let course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours'
};

let newCourse = { ...course };
console.log('newCourse', newCourse);

// So the spread operator allows us to easily copy properties and methods
// from one object to another. Making a clone of the object.

// We could also modify the properties for our own custom use.
newCourse = { 
    ...course,
    name: 'JavaScript Pro'
};

console.log('newCourse', newCourse);

// Now a similar syntax can be used in the context of functions.
// So when we use, ..., in functions, we refer to it as the rest operator.
// So unlike the spread operator which expands an array or object,
// the rest operator allows us to gather a varying number of arguments
// into a single array parameter.

// This is particularly useful when we want a function 
// to accept an indefinite number of arguments.

// The name of the parameter doesn't matter.
function multiply(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log( multiply(1, 2, 3, 4) ); // results in the value of 24

// so the parameter numbers is an array containing a varying number of values
// based on the arguments supplied
function multiplier(multiplierValue, ...numbers) {
    return numbers.map(number => number * multiplierValue);
}

console.log( multiplier(2, 1, 2, 3, 4) );