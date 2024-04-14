// Switch-case statements can also be used for control flow.
// The difference between if-else statements and switch-case statements
// is that switch-case statements are only used for equality comparisons.

let job = 'Software Developer';

if (job === 'Software Developer') {
    console.log('Writes code');
} else if (job === 'Designer') {
    console.log('Makes user interface documents');
} else if (job === 'Cloud Engineer') {
    console.log('Manages and deploys cloud resources');
} else {
    console.log('Works directly with customers');
}

// Since we doing equality comparisons, this can be hard to read and reptitive.
// So in this case, we could use the switch-case statements.

switch (job) {
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Makes user interface documents');
        break;
    case 'Cloud Engineer':
        console.log('Manages and deploys cloud resources');
        break;
    default:
        console.log('Works directly with customers');
}