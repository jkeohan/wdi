

var first = process.argv[2];
var last = process.argv[3];
var color = process.argv[4];
var num1 = parseInt(process.argv[5]);
var num2 = parseInt(process.argv[6]);

console.log( "Your name is: " + first + " " + last );


function buildname (first,last,color) {
	console.log( "Your name is: " + first + " " + last  + "\n Your fav color is" + color);
	}

buildname(first,last,color);


var BD = function (first,last,color) {
	console.log( "Your name is: " + first + " " + last  + "\n Your fav color is" + color);
	};


if(num1 < num2) {
	console.log("The larger num is num2: " + num2);
}else { console.log (" The larger num is num1: " + num1);
}

console.log(BD);