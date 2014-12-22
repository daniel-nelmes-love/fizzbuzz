$(document).ready(function() {

var num = prompt("Input a number to see if it will Fizz and/or Buzz")
var num = +num
var alertReload = function(message) {
	alert(message);
	location.reload();
}

if (num % 1 != 0) {
	alertReload("Please input a whole number e.g. 1")
} else if (num===0) {
	alertReload("Are you trying to break me!?")
} else if (num % 3 === 0) {
	if (num % 5 === 0) {
		alertReload("FizzBuzz");
	} else {
		alertReload("Fizz");
	}
} else if (num % 5 ===0) {
	alertReload("Buzz");
} else{
	if(confirm(num + " did not fizz or buzz :(" +
		"\n" +
		"Would you like to try again?")) {
		location.reload();
	} else {
		alert("Thanks for playing!")
	}
}


//	for (var i = 1; i <= 100; i++) {
//		if ((i%5)===0) {
//			if ((i%3===0)) {
//				$('body').append("<p>fizzbuzz</p>");
//			} else {
//				$('body').append("<p>buzz</p>");
//			}
//		} else if ((i%3)===0) {
//			$('body').append("<p>fizz</p>");
//		} else {
//			$('body').append("<p>" + i + "</p>")
//		}
//	}


})