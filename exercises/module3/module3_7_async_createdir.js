var fs = require("fs");

fs.mkdir("lib2", function(err) {

		if (err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}

	});

