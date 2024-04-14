// Objects are reference types. (They are not a primitive value)
// Objects represent nouns. (person, place, or thing)
// They contain state or behavior, allowing you to group together related values.

// Object Literals use curly braces.
// Here you would specify key-value pairs.
let course = {
    name: 'JavaScript for Beginners',
    hours: 3,
};

// You can access a property through dot notation.
console.log(course.name);

// You can also reassign the value.
course.name = 'JavaScript Fundamentals';

console.log(course.name);

// You can also access properties through bracket notation.
// You would typically use dot notation however bracket notation is used
// if you don't know the exact key/property you want to access until runtime.

console.log(course['name']);

course['name'] = 'JavaScript 101';

console.log(course.name);

// An example of how you would use bracket notation.
let property = 'hours';
console.log(course[property]);

// To demonstrate the different aspects of a JavaScript object.
// The key-value is referred to as a property of the JavaScript object.
let obj = {
    key: 'value'
};