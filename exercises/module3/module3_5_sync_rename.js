var fs = require("fs");

fs.renameSync("./lib/file1.txt", "./lib/file3.txt");

console.log("file renamed");
