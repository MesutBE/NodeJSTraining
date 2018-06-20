const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
});

rl.on('line', (line) => {
  console.log(`${line}`);
});