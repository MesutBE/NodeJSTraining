var fs = require("fs");

fs.rename("./lib/file2.txt", "./lib/file4.txt", function(err) {

	if (err) {
		console.log(err);
	} else {
		console.log("File renamed");
	}

});