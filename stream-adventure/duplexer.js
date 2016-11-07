var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {
    var process = spawn(cmd, args);
    var stdinStream = process.stdin;
    var stdoutStream = process.stdout;
    return duplexer2(stdinStream, stdoutStream);
};
