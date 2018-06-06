// Module 2 Built in Modules
// HTTP Module

var http = require("http");

var server =  http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
});

server.listen(8081);

console.log('Server listening on port 8081');