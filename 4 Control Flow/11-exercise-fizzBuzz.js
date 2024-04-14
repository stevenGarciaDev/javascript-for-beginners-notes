// Implement a function to accept a number.
// Then return "FizzBuzz" if divisible by 3 and 5.
// Or return "Fizz" if only divisible by 3.
// Or return "Buzz" if only divisible by 5.
// Or return the original number if not divisible by 3 or 5

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;

    if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz';
    else if (num % 3 === 0)
        return 'Fizz';
    else if (num % 5 === 0)
        return 'Buzz';
    else
        return num;
}