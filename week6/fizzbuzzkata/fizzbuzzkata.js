function fizzBuzz(num) {
    let string = '';
    if (num % 3 === 0) string += 'Fizz';
    if (num % 5 === 0) string += 'Buzz';
    return string.length ? string : num;
}

module.exports = fizzBuzz;