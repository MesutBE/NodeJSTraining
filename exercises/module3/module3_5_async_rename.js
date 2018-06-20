var fs = require("fs");

fs.rename("./lib/file2.txt", "./lib/file4.txt", function(err) {
		console.log("File renamed");
});