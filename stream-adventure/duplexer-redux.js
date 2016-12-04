var duplexer = require('duplexer2');
var stream = require('stream');

module.exports = function (counter) {
    var myCounts = {};
    var myWritable = new stream.Writable({objectMode: true});
    myWritable._write = function (data, encoding, done) {
        console.log("Read " + data);
        var key = data.country;
        var currentCount = myCounts[key];
        
        if(currentCount) {
            currentCount++;
        } else {
            currentCount = 1;
        }
        console.log("Updating count for " + key + " to " + currentCount);
        myCounts[key] = currentCount;
        done();
    };

    myWritable.on("finish", function() {
        counter.setCounts(myCounts);
    });

    return duplexer({objectMode:true}, myWritable, counter);
};
