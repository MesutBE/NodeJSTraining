// Module 2 Built in Modules
// HTTP Module Exercise

var http = require("http");

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"});

	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Hello Word </h1> 
			</body>
		</html>
	`);

});

server.listen(3000);

console.log("Server listening on port 3000");