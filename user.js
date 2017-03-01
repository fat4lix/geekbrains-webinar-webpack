
module.exports = {
	sayHi: function($message){

		if (ENV == 'dev') {
			console.log($message)
		}

		alert('Hello');
	}
}