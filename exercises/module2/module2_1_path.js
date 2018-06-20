// Module 2 Built in Modules
// Path Module

const path = require('path');

//basename and dirname
// console.log(path.basename('/test/demo1.txt'));
// console.log(path.dirname('/test/demo1.txt'));

//__filename and __dirname
// console.log(path.basename(__filename));
// console.log( path.basename(__dirname));

// Join
let testdir = path.join(__dirname, 'test');
console.log(testdir);


