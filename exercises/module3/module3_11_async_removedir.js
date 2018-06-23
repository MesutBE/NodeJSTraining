var fs = require("fs");

fs.rmdir("./lib2", (err) => {

	console.log("Directory removed");

});