//var input = parseInt(process.argv[2]);
//console.log("Input is: " + input);
var input = 1;
while(input <= 100){
if ((input % 3) === 0 && (input % 5) === 0) {
    console.log("FizzBuzz");
} else if ((input % 3) === 0) {
    console.log("Fizz");
} else if ((input % 5) === 0) {
    console.log("Buzz");
} else {
    console.log("Input is: " + input);
}
	input++;
}