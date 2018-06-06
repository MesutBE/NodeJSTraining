// Module 3 File System
// Read File 


var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Reading Files...");

