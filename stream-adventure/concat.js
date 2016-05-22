var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
    var output = body.toString().split('').reverse().join('');
    process.stdout.write(output);
}));

