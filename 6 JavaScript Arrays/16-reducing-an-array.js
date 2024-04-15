// JavaScript has a very powerful array method called reduce.
// It can transform an array into just about anything,
// such as a number, string, object, or another array.

// This is how you would traditionally calculate the sum of an array of numbers.
const numbers = [1, 10, 5, 14];
let sum = 0;

for (const number of numbers)
    sum += number;

console.log(`Total sum: ${sum}`);

// There's a cleaner way to accomplish this with the sum method.
// 1st argument is a callback function
//      this should take in two parameters for the accumulatorValue and the currentValue
// 2nd argument is the initial value for the accumulator
sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);