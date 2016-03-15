var fs = require('fs')

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);
var fileAsString = buffer.toString();

var splitArray = fileAsString.split('\n');

console.log(splitArray.length-1)