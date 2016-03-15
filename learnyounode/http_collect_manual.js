var http = require('http');

var url = process.argv[2];

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
		console.log(completeList.length);
		console.log(completeList);
	});
});