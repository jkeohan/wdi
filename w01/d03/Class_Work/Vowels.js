var input = process.argv[2];
//console.log("Your input was " + input);

var vowels = ["a","e","i","o","u"];


var length = input.length;
var newtext = "";

var counter = 0;

while (counter <= length) {
	//console.log(vowels[counter]);
	//console.log(input.charAt(counter));

	if(input.charAt(counter) === 'e' || 
		input.charAt(counter) === "o" ||
		input.charAt(counter) === "a"){
	//console.log(input.charAt(counter));
	newtext = newtext + input.charAt(counter);
	}

	//if ((vowels[counter]).test(input.charAt(counter)) == true) {
	//	console.log(input.charAt(counter));
	//

	counter++;
}
console.log(newtext);

var methods = [];
for (var m in obj) {        
    if (typeof obj[m] == "function" && obj.hasOwnProperty(m)) {
        methods.push(m);
    }
}
console.log(methods.join(","));
