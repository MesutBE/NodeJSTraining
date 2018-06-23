var fs = require("fs");

fs.rename("./lib/file2.txt", "./lib/file4.txt", (err) => {
		console.log("File renamed");
});