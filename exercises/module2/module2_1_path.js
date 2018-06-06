// Module 2 Built in Modules
// Path Module

var path = require('path');

console.log( path.basename(__filename));

var testdir = path.join(__dirname, 'test');
console.log(testdir);


