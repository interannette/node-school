var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extension, callback) {
	fs.readdir(dirName, function(err, list) {
		if(err) {
			console.log("Error getting directory listing");
			return callback(err);
		}
	
		var matches = [];
		list.forEach(function(entry){
			if(path.extname(entry) === "." + extension) {
				matches.push(entry);
			}
		});
		callback(null, matches);
	});
} 