$(document).ready(function() {

var inputValue = prompt("Please input a number from 1 to 100", "number");

$('body').append(inputValue);


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