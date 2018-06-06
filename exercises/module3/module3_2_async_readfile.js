// Module 3 File System
// Read File 

var fs = require("fs");

fs.readFile('input.txt', "UTF-8", function (err, data) {
    if (err) {
		throw err;
	}

    console.log(data.toString());
 });
 
console.log("Reading Files...");