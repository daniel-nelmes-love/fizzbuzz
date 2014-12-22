$(document).ready(function() {

var num = prompt("Input a number to see if it will Fizz and/or Buzz")
var num = +num
var endGame = function(message) {
	if(confirm(message + "\n"+
		"\n"+
		"Would you like to try again?")) {
		location.reload();
	} else {
		alert("Thanks for playing!");
	}
}

if (num % 1 != 0) {
	endGame("Please input a whole number e.g. 1");
} else if (num===0) {
	if(confirm("Would you like to try again?")) {
		location.reload();
	} else {
		alert("Thanks for playing!");
	}
} else if (num % 3 === 0) {
	if (num % 5 === 0) {
		endGame("FizzBuzz! Super Awesome!!");
	} else {
		endGame("Fizz - Nice!");
	}
} else if (num % 5 ===0) {
	endGame("Buzz - Awesome!");
} else{
	endGame(num + " did not fizz or buzz :(");
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