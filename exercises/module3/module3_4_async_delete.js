var fs = require("fs");

fs.unlink('input.txt', (err) => {
   console.log("File deleted successfully!");
});