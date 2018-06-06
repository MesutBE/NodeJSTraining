// Module 3 File System
// Write File 

var fs = require("fs");

fs.writeFile('input.txt', 'Hello World',  function(err) {
    if (err) {
		throw err;
	}

fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
   });
});