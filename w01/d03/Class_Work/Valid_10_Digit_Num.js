//Valid_10_Digit_Num

var phone = process.argv[2];

if(phone == null) {
	//added the above null comparisone so that I could run the script without 
	console.log("No phone input provided");
}else {
	if(phone.length == 10) {
		console.log("Exactly 10 numbers");
	}else { console.log ("Please enter 10 digits only");
	}
}