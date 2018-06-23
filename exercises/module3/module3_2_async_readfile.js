// Module 3 File System
// Read File 

var fs = require("fs");

fs.readFile('input.txt', "UTF-8", (err, data) => {
    console.log(data.toString());
 });
 
console.log("Reading Files...");