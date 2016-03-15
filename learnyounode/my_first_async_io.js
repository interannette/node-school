var fs = require('fs')

var filename = process.argv[2];

fs.readFile(filename, function processFile(err, fileContents) {
	if(err) {
		console.log("suck it");
	} else {
		var fileAsString = fileContents.toString();
		var splitArray = fileAsString.split('\n');
		console.log(splitArray.length-1)		
	}
});



