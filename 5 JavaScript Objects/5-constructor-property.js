// Every object in JavaScript has a constructor function.
const person = {
    name: 'Steven'
};

console.log( person.constructor );

let newObj = {};
// internally JavaScript sees this as
// let newObj = new Object();
// so object literal syntax is syntactic sugar

/*
new String();
new Boolean();
new Number();
*/