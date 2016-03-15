var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var strings = [];

callUrl(urls[0], strings, 0);
callUrl(urls[1], strings, 1);
callUrl(urls[2], strings, 2);

function callUrl(url, strings, index) {
	http.get(url, function(response){
	var list = [];
	response.setEncoding("utf8");
	response.on("data", function(data){
		list.push(data);
	});
	response.on("error", function(error){
		console.error(error);
	});
	response.on("end", function(end){
		var completeList = list.join("");
		strings[index] = completeList;

		if(strings[0] && strings[1] && strings[2]) {
			console.log(strings[0]);
			console.log(strings[1]);
			console.log(strings[2]);
		}
	});
});
}

