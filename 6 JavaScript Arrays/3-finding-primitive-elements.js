// Arrays can store both primitive data types or reference data types (objects).
// There are three main methods we can use to check if an array contains a primitive value.

// .indexOf()
// .lastIndexOf()
// .includes()

const numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3);
console.log('indexOfThree', indexOfThree); // outputs 2, since the element 3, is at the index of 2
console.log( numbers[indexOfThree] );

// searches from right to left
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log('indexOfThree', indexOfThree); // outputs 25 since the element 3's last occurence is at the index of 5

const indexOfTen = numbers.indexOf(10);

// So if an element is not found, then the index will be -1
// if you try accessing the array at the position of -1, then it will be undefined

// So whenever we do .indexOf() or .lastIndexOf()
// we would usually have a conditional statement to ensure the index position is not -1

if (indexOfTen === -1) {
    console.log('10 is not found in the array');
}

// If we are not utilizing that index value in order to access or change that element,
// then we can just use the includes method which will return true or false.
if (numbers.includes(10)) {
    console.log('10 is found in the array');
}

if (!numbers.includes(10)) {
    console.log('10 is not found in the array');
}