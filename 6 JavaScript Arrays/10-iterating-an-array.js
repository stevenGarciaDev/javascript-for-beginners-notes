// To iterate over an array, you could use the for-of loop.
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers)
    console.log(number);

// There is another built in method in the array class, known as .forEach()
// so you pass a callback function as the argument for .forEach()


numbers.forEach((number) => {
    console.log(number);
});

// since the arrow function's code block is just one line
// we can put everything on one line to simplify it
// numbers.forEach(number => console.log(number));

// The argument for the .forEach() method also accepts an optional second parameter,
// which is the index of the corresponding element.
numbers.forEach((number, index) => console.log(`At index, ${index}: ${number}`));