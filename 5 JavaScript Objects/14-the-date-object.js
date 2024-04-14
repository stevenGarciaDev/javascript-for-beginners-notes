// In JavaScript we have a built in Date object which stores the date and time.
// It also provides methods for data and time management.

// We would use the Date object most commonly to store creation and modification times
// for a resource in our database.

// The Date object can be initialized many different ways.
// refer to the documentation at developer.mozilla.org

let now = new Date();

console.log( now ); 

// passing a number as an argument,
// will represent the number of milliseconds since Jan 1, 1970
let Jan01_1970 = new Date(0); // 0 seconds since Jan 1, 1970
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

const dateOne = new Date('December 25, 2024 16:08');

const Jan1_2024 = new Date(2024, 0, 1); // Jan 1, 2024

console.log( now.getFullYear() );

// Represented as a number,
// so 0 = Jan, 1 = Feb, etc.
console.log( now.getMonth() ); 

// difference between UTC (Coordinated Universal Time) and local time zone
console.log( now.getTimezoneOffset() );


