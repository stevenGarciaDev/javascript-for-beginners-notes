// In JavaScript arrays come equipped with several powerful methods
// that allow us to process and evaluate the data within them efficiently.

// Two such methods are .every() and .some()
// Both of which are used to test elements in an array against a condition.

// .every() tests whether all elements of an array pass the test of the provided function. 
// It returns true if every element in the array satisfies the condition and false otherwise.

let numbers = [2, 4, 6, 8, 10];

// so .every() can accept up to three parameters
// 1st param: the current element of the array
// 2nd param (optional): the index of where the element is stored
// 3rd param (optional): the original array
const areAllEven = numbers.every(number => number % 2 === 0);
console.log(`areAllEven: ${areAllEven}`);

// .some() checks if at least one element in the array passes the test
// implemented by the provided function.

numbers = [1, 3, 5, 7, 8, 9];

// 1st param: the current element of the array
// 2nd param (optional): the index of where the element is stored
// 3rd param (optional): the original array
const hasOneEvenNumber = numbers.some(number => number % 2 === 0);