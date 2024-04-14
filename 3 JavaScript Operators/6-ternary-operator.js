// In JavaScript, we have the ternary operator.
// It is a conditional operator that allows us to write cleaner code.
// This can be used when you need to perform a comparison and store values.

// Note: in this case you could just do 
// const canDrive = age >= 16; 
// but this is just to demonstrate the syntax of the ternary operator.

let age = 16;
const canDrive = age >= 16 ? true : false;
console.log('canDrive', canDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log('customerType', customerType);