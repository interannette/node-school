var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response){
	var src = fs.createReadStream(file);
	src.pipe(response);
});

server.listen(port);