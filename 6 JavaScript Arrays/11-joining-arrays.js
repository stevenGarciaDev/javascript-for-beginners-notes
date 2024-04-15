// To transform an array into a string, the join() method can be utilized.
const numbers = [1, 2, 3, 4, 5];

// Can convert the array into a string,
// where you specify the separate as the argument which will be placed in between the elements.
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers);

// Likewise, the .split() method is available for strings,
// this is done to convert a string into an array.
// This will not alter the original string, rather it will return an array.
const courseName = 'JavaScript for Beginners';
const parts = courseName.split(' ');
console.log(parts);

// So an example which shows how this could be useful,
// consider the term, URL (Uniform Resource Locator) slug

// This refers to having a descriptive path in your URL.
// URL slugs are separated by a hyphen

// Utilize method chaining
const urlSlug = courseName
    .toLowerCase()
    .split(' ')
    .join('-');