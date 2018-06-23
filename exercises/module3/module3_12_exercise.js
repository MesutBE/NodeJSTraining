var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) {

	var responseBody = "";
    res.setEncoding("UTF-8");
    res.on("data", function(chunk) {
        responseBody += chunk;
    });
	res.on("end", () => {
		fs.writeFile("george-washington.html", responseBody, function(err) {
			console.log("File Downloaded");
		});
	});

});

req.on("error", (err) => {
	console.log(`problem with request: ${err.message}`);
});

req.end();
