var day = process.argv[2];
var phone = process.argv[3];

var days = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];

var length = days.length;
console.log("You choose: " + day);

for(var i = 0;i<length;i++) {
	var day_lower = day.toLowerCase();
	if(days[i] == "saturday" || days[i] == "sunday") {
		console.log("You choose a weekend...AWSOME");
		break;
	}else { console.log("You choose a weekday...BLAH..");	
		break;
	}	
}


if(phone == null) {
	console.log("Not phone input provided");
}else {
	if(phone.length == 10) {
		console.log("Exactly 10 numbers");
	}else { console.log ("Please enter 10 digits only");
	}
}


