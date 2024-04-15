// The 'this' keyword is crucial because it refers to the object
// that is currently executing the function or method.

// The value of 'this' depends on the context in which a function
// is called, not where it's declared.

const course = {
    name: 'JavaScript for Beginners',
    start() {
        console.log(this.name);
    }
}

course.start();

// In a function, (meaning not a method defined for an object)
// the this keyword will reference the global object.
// In browsers it's the window object and in Node.js it's the global object.

function startVideo() {
    // This outputs the global object in Node.js
    // This would output the window object in web browsers
    console.log(this);
}

// Arrow functions don't have their own 'this' context.
// Instead they inherit this from their parent scope at the time they are defined.

const newCourse = {
    name: 'ES6 syntax',
    start: () => {
        console.log(this.name);
    }
};

course.start(); // the output is undefined

// This is because when using arrow functions, 
// the 'this' keyword inherits from its parents scope.
// So in this case, it would be the global object (in Node.js)

// Since the global object doesn't have a name property,
// then this value will be undefined.

// You can explicitly set the value of 'this' using bind.
// So bind returns a new function with it bound to a specific object,
// but doesn't immediately invoke it.

function introduce(language) {
    console.log(this.name + ' teaches ' + language);
}

const instructor = { name: 'Steven' };
const introduction = introduce.bind(instructor);

introduction('JavaScript'); // the output is 'Steven teaches JavaScript'

// So the 'this' keyword in JavaScript plays a critical role in 
// determining the context of function execution.
// Its value is determined by the execution context 
// or explicitly bound using bind.