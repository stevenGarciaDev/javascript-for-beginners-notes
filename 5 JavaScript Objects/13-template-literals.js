// In previous lessons when working with strings,
// we have used either single quotes, '', or double quotes, ""

// We have another way to create a string literal and that is with backticks, ``
// We would call this a template literal.
// The benefit is that it allows us to use string interpolation rather than string concatenation.

let firstName = 'Steven';
let lastName = 'Garcia';

// string concatenation
let fullName = firstName + ' ' + lastName;

// string interpolation with a template literal
// ${} acts as a placeholder and within, we can specify an expression
// an expression is any code that would return some value
fullName = `${firstName} ${lastName}`;