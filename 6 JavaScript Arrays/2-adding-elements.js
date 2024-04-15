// So one of the most common operations when dealing with arrays
// is adding elements.

// Using the const keyword, we can't reassign this variable to any other value,
// but we can modify the array (the object) that it references.
const numbers = [5, 4, 3, 2, 1];

// There are 3 ways to add an element to an array.
// Add to the beginning with .unshift()
// Add to the middle with .splice()
// Add to the end with .push() 

numbers.unshift(14);
numbers.unshift(17, 19);

// 1st arg is the index position to start from,
// 2nd arg is the number of elements to delete
// then can specify one or more elements to add from that index position specified from the 1st arg
numbers.splice(1, 0, 18);
numbers.splice(1, 0, 25, 24);

numbers.push(7);
numbers.push(10, 11, 12);
