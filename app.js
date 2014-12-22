$(document).ready(function() {

var inputVal = prompt("Please input a number from 1 to 100")
var inputVal = +inputVal
var alertReload = function(message) {
	alert(message);
	location.reload();
}

if (inputVal % 1 != 0) {
	alertReload("Please input a number")
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