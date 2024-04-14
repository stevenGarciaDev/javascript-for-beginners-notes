// So if we were to create another object with the same properties
// and methods as the dog object, it would require that we copy and paste.
// Copy and pasting is a sign of code duplication which is somethig that 
// we want to avoid in our programs.

const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
};

// This makes our code harder to read, more susceptible to bugs,
// and more difficult to modify.

// One way that we can create another dog object, it to use a factory function.
// This refers to a function, named with the camelCase naming convention,
// which returns an object literal.

// The details are within the factory function and we pass arguments to the 
// factory function's parameter variables. The arguments are used 
// to create that custom object.

function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat: function() {
            console.log(this.name + ': Chomp!');
        },
        bark() {
            console.log(this.name + ': Woof!');
        }
    };
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);