var fs = require("fs");

// fs.readdir('./', function(err, files) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(files);
// });
// console.log("Reading Files...");

function listFiles(err, data) {
	console.log('data:', data);
}

fs.readdir('./', listFiles);

console.log("Reading Files...");
