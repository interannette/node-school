var through = require('through2');

var upper = through(
    function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }
)

process.stdin.pipe(upper).pipe(process.stdout);
