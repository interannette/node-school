var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response){
	if(request.method != "GET") {
		return response.end("Did not send GET");
	}

	var parsedUrl = url.parse(request.url, true);
	var parsedDate = new Date(parsedUrl.query["iso"]);

	var result;
	if(parsedUrl.pathname === "/api/parsetime") {
		result = parseTime(parsedDate);
	} else if(parsedUrl.pathname === "/api/unixtime") {
		result = unixTime(parsedDate);
	} else {
		return response.end("Only supports parsetime and unixtime");
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));

});

server.listen(port);

function parseTime(date) {
	var result = {};
	result["hour"] = date.getHours();
	result["minute"] = date.getMinutes();
	result["second"] = date.getSeconds();
	return result;
}

function unixTime(date) {
	var result = {};
	result["unixtime"] = date.getTime();
	return result;
}