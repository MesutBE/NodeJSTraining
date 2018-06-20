// Module 3 File System
// Write File 

var fs = require("fs");

fs.writeFile('input.txt', 'Hello World2',  function(err) {
});

fs.readFile('input.txt', function (err, data) {
  console.log(data.toString());
});