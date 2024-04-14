// refer to the documentation at mozilla.developer.org

// We have string literals
const name = 'Steven';
console.log(typeof name); // 'string'

// can also make a string using the string object
const anotherName = new String('Joe');
console.log(typeof anotherName); // 'object'

// we can access the methods of strings using dot notation or bracket notation
// The JavaScript engine will internally wrap the string literal with the string object.

// There are built in methods for strings that allow us to operate and manipulate strings.
let sentence = 'A new sentence';

const doesIncludeNew = sentence.includes('new');
console.log('doesIncludeNew', doesIncludeNew); // true

// can access characters by index value, where the first character of a string is at the index 0
console.log(sentence[3]); // 'e'

const startsWithA = sentence.startsWith('A');
console.log('startsWithA', startsWithA); // true

const endsWithA = sentence.endsWith('A');
console.log('endsWithA', endsWithA); // false

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence); // 'A short sentence'

let input = ' username@gmail.com ';
console.log( trim(input) ); // 'username@gmail.com', so trim() removes spaces at the beginning and the end

// split(), will split the sentence into an array
const wordsInSentence = sentence.split(' '); // so split on the empty space
console.log(wordsInSentence);

let email = 'TesTEmail@gmail.com';
console.log( email.toLowerCase() );
console.log( email.toUpperCase() );