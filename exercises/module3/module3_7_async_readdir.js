var fs = require("fs");

// fs.readdir('./', (err, files) => {
// 	console.log(files);
// });
// console.log("Reading Files...");

function listFiles(err, data) {
	console.log('data:', data);
}

fs.readdir('./', listFiles);

console.log("Reading Files...");
