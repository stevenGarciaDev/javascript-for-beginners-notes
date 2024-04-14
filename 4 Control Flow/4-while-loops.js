let numbers = [1, 2, 3, 4, 5, 6, 7];

// We use for loops when we know the exact number of times that we want the loop to execute.
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

// There's another way to perform loops, which is the while-loop.
// You would use the while-loop when you know which condition 
// must be true, to perform the loop, but not the exact number of times
// you want the loop to be performed.

let idx = 0;
while (idx < numbers.length) {
    console.log(numbers[idx]);

    idx++;
}

let sum = 0;
while (true) {
    console.log('Loop');
    sum++;

    if (sum === 10)
        break;
}
