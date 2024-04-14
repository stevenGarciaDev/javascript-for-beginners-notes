let numbers = [1, 2, 3, 4, 5, 6, 7];

// To output all of the elements in the array.

let idx = 0;
let lengthOfArray = numbers.length;

console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx] );

// You can use the for loop to efficiently iterate through an array
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}