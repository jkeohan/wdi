//if divisible by 3 return Fizz

//if divisible by 5 return Buzz

//if divisible by both return FizzBuzz


var input = parseInt(process.argv[2]);
console.log("Input is: " + input);

if ((input % 3) === 0 && (input % 5) === 0) {
    console.log("FizzBuzz");
} else if ((input % 3) === 0) {
    console.log("Fizz");
} else if ((input % 5) === 0) {
    console.log("Buzz");
} else {
    console.log("Input is: " + input);
}