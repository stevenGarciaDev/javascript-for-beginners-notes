// The differences between the let and var keyword are a commonly asked interview question.
// In JavaScript versions prior to ES6 (ECMAScript 2015), the var keyword was used to declare variables.

// The var keyword is function-scoped. Meaning that it is available anywhere within a function.
function display() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    // we can still access the variable, i, outside of the block it is defined in
    console.log(i);
}

// The let keyword introduces block-scoping to JavaScript.
// This means that a variable declared with let, is only accessible within the block it's defined in.

function displayNumbers() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // we cannot access the variable, i, outside of the block it is defined it
    // since we declared it with the let keyword and it is therefore, block-scoped

    // if we tried to access it, then it would result in a ReferenceError
    // console.log(i);
}
