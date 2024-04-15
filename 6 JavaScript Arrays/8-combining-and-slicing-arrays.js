// Let's say we have two arrays and we want to combine it into one array.
const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

// Can combine these arrays using the concat method.
const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log('combinedArray', combinedArray);

// slice(startIndex, endIndex) where the endIndex is exclusive (not included)
// The slice method will not affect the original array.
const firstSlice = combinedArray.slice(0, 4);
console.log('firstSlice', firstSlice);

// If you doing this will primitive values, then the elements will be passed by copy.
// However if you're dealing with objects, then the elements will be passed by reference.

