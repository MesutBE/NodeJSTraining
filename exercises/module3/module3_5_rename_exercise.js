var fs = require("fs");

fs.rename("./img.jpg", "./birds.jpg", function(err) {

	if (err) {
		console.log(err);
	} else {
		console.log("File renamed");
	}
});

fs.unlink("bird.jpg", function(err) {
	if (err) { 
        console.log(err);
    } else { 
        console.log("file removed");
    }
});
