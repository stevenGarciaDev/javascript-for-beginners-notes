// Programming is powerful as it enables us to execute different code based on conditions.
// This is what enables us to provide dynamic and personalized
// applications to end users.

// The fundamental programming concept that enables this is conditional statements.
// More specifically, if-else statements.

let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

console.log('canBuyChocolate', canBuyChocolate);
console.log(typeof canBuyChocolate);

if (hasAmountInCash >= priceOfChocolate) {
    console.log('Enjoy your purchase');
} else {
    console.log('Sorry you do not have enough');
}

let hour = 10;

if (hour > 6 && hour <= 12) {
    console.log('Serving breakfast');
} else if (hour > 12 && hour <= 14) {
    console.log('Serving lunch');
} else {
    console.log('Serving dinner');
}