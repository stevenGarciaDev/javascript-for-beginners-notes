// Getters and setters within JavaScript, enhance how you interact with object properties.

let course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    details() {
        return `${this.name} is ${this.duration}`;
    }
};

console.log(`${course.name} is ${course.duration}`);

console.log( course.details() );

// By using getters and setters, these enable us to define custom logic
// for reading and writing properties.
// This enables us to use methods as if they were regular properties
// as a means of encapsulation.
// So they act like virtual properties.

course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split(' is ');

        this.name = parts[0];
        this.duration = parts[1];
    }
};

console.log( course.details );

course.details = 'JavaScript Pro is 10 hours';

console.log( course.details );