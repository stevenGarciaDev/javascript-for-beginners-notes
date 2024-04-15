// The powerful concept of error handling is needed for all JavaScript
// applications that utilize backend APIs.

// This is done through try-catch blocks.



let course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        if (typeof value !== 'string') {
            // Here we are throwing an exception.
            throw new Error(`Vallue, ${value} is not a string`);
        }

        let parts = value.split(' is ');

        this.name = parts[0];
        this.duration = parts[1];
    }
};

// Using try-catch blocks enable us to catch possible exceptions 
// so that we can gracefully handle errors without our programs crashing/terminating.
try {
    // Within try blocks, would place code that could potentially throw exceptions.
    course.details = 42;
} catch (e) {
    console.log(`Caught an error: ${e.message}`);
}