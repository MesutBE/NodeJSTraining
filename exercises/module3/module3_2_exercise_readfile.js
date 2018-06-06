var fs = require('fs')

// Synchronous Method
// var data = require('./data.json')
// console.log(data.name)

// Asynchronous Method
fs.readFile('./data.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data.name)
})