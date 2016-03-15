var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response){
	if(request.method != "POST") {
		return response.end("Did not send POST");
	}
	request.pipe(map(function (chunk){
		return String(chunk).toUpperCase();
	})).pipe(response);
});

server.listen(port);