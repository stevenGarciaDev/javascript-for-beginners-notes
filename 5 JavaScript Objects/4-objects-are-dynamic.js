// Objects in JavaScript are dynamic.
// Meaning that we can add properties or methods at any time.

// The const keyword used with an object, means that we can't reassign it.
// But we can still change/mutate the properties and methods the object
// that it references.
const person = {
    name: 'Steven'
};

console.log(person);

// We can add properties on the fly with dot notation (member notation)
person.favoriteFood = 'tacos';

console.log(person);

// Could also use bracket notation
person['favoriteIceCream'] = 'chocolate';

console.log(person);

// You could delete properties with the delete keyword
delete person.favoriteIceCream;

console.log(person);

person.eat = function() {
    console.log('start eating');
}

person.eat();
