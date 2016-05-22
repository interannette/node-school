var http = require('http');
var through = require('through2');

var upper = through(
    function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }
)

var serverFunction = (function (request, response) {
        request.pipe(upper).pipe(response);
});

var server = http.createServer(serverFunction);
server.listen(process.argv[2]);

