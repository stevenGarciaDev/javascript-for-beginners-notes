let a = { value: 10 };
let b = a;

// Since they both reference the same object, if you update one variable, 
// it will be reflected in the other variable.
b.value = 20;

console.log(a);
console.log(b);

// So if you wanted to have it be the same where
// if you change one property it doesn't affect the other variable.
// Then you would need to create a clone of that object.

// The first argument is the object you want to copy to. (the target object)
// Then you could pass one or more source objects whose properties and methods 
// will be copied to the target object.
// So this creates a copy of the object so changing one won't affect the other.
Object.assign(b, a);

// We have a more modern syntax to accomplish this, using the spread operator.
// The spread operator is represented with three dots.
// So this creates a copy of the object so changing one won't affect the other.
b = { ...a };