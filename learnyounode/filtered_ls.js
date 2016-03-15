var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(dir, function(err, list) {
	if(err) {
		console.err("Stuff broke");
	} else {
		list.forEach(function(entry){
			if(path.extname(entry) === extension) {
				console.log(entry);
			}
		})
	}
});