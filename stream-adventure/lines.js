var split = require('split');
var through = require('through2');

var lineNum = 1;
var changeCase = through(
    function write(buffer, encoding, next) {
    
        if((lineNum % 2) == 1) {
            this.push(buffer.toString().toLowerCase());
        } else {
            this.push(buffer.toString().toUpperCase());
        }
        lineNum++;
        next();
    }
)
process.stdin.pipe(changeCase).pipe(process.stdout);
