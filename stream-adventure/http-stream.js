var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var upper = through(
    function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }
)

var stream = tr.createStream('.loud');
stream.pipe(upper).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
