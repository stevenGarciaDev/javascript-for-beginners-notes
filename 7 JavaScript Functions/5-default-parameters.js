// Default parameters enhance function flexibility.
function writeCode(language) {
    console.log(`Write code in ${language}`);
}

writeCode('JavaScript');
writeCode('C#');

// But what if we were to call writeCode() without any arguments
// The parameter, language, would have the value of undefined by default.
writeCode();

// We can assign a default value to parameters,
// ensuring that our function behaves predictably
// even when specific arguments aren't provided.

function writeProgram(language = 'JavaScript') {
    console.log(`Write code in ${language}`);
}

// If you set a default parameter, then all parameters that follow
// must also be assigned a default value.
function codeDetails(language = 'JavaScript', tool = 'VS Code') {
    console.log(`Writing code in ${language} using ${tool}`);
}

// This enables us to call/invoke our function with flexibility
codeDetails();
codeDetails('Python');
codeDetails('C#', 'Visual Studio');

function createUser(name, role = 'guest', status = 'active') {
    console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
}

createUser('Steven');
createUser('Alice', 'admin', 'active');
