var fs = require("fs");

fs.rmdir("./lib2", function(err) {

	if (err) {
		throw err;
	}

	console.log("Directory removed");

});