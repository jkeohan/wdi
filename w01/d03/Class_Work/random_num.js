var num1 = process.argv[2];
var num = parseInt(process.argv[2]);
console.log(typeof num1);

//var randomnumber=Math.floor(Math.random()*11)

var randomnumber=Math.floor(10*Math.random());
var answer = "";

console.log(randomnumber);

if(num == randomnumber) {
	console.log("Your right on");
}else { console.log("Wrong");

}
