// We have the for-of loop for iterating over an array.
// We have the for-in loop to iterate over the keys of an object.

let numbers = [1, 2, 3, 4, 5];

for (const elements of numbers)
    console.log(elements);

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};

for (const key in dog) 
    console.log(dog[key]);

// We have another syntax for enumerating over the keys and values of an Object

// This returns the keys of the object as an array
// Such as: ['name', 'age', 'eyeColor']
const keys = Object.keys(dog);

for (const key of Object.keys(dog))
    console.log(key);

// This returns the values of the object as an array
// Such as: ['Max', 5, 'blue']
const values = Object.values(dog);

for (const value of Object.values(dog))
    console.log(value);

// This returns the key-value pairs of the object as an array.
// So each element will be an array itself, [key, value]
// Such as: [['name', 'Max'], ['age', 5], ['eyeColor', 'blue']];
const entires = Object.entries(dog);

for (const entry of Object.entries(dog))
    console.log(`Key: ${entry[0]} => Value: ${entry[1]}`);