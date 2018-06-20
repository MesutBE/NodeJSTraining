var fs = require("fs");

fs.rename("./img.jpg", "./birds.jpg", function(err) {
		console.log("File renamed");
});

fs.unlink("bird.jpg", function(err) {
        console.log("file removed");
});
