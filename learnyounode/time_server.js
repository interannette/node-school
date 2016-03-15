var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
	socket.end(formatDate(new Date()));
});
server.listen(port);

function formatDate(date) {
	var year = date.getFullYear();
	var month = padToTwoDigits(date.getMonth() + 1);
	var day = padToTwoDigits(date.getDate());
	var hours = padToTwoDigits(date.getHours());
	var mins = padToTwoDigits(date.getMinutes());

	return year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n";
}

function padToTwoDigits(i) {
	var iAsString = String(i);
	if(iAsString.length == 1) {
		iAsString = "0" + iAsString;
	}
	return iAsString;
}