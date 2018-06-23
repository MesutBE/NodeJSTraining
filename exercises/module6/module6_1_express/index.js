var express = require("express");
var app = express();

// GET method route
// app.get('/', (req, res) => {
//     res.send('Hello World')
//   })
  
// app.get('/about', (req, res) => {
//     res.send('About Us')
//   })

app.use(express.static("./public"));

app.listen(3000);

console.log("Express app running on port 3000");
