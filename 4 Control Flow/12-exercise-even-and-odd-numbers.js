let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayEvenNumbers(number) {
    for (const num of number) {
        if (num % 2 === 0)
            console.log(num);
    }
}

function displayOddNumbers(number) {
    for (const num of number) {
        if (num % 2 !== 0)
            console.log(num);
    }
}