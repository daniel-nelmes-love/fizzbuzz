$(document).ready(function() {

	for (var i = 1; i <= 100; i++) {
		if ((i%15)===0) {
			$('body').append("<p>fizzbuzz</p>");
		} else if ((i%5)===0) {
			$('body').append("<p>buzz</p>");
		} else if ((i%3)===0) {
			$('body').append("<p>fizz</p>");
		} else {
			$('body').append("<p>" + i + "</p>")
		}
	}
})