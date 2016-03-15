var mymodule = require('./make_it_module.js'); 
var dir = process.argv[2];
var extension = "." + process.argv[3];

mymodule(dir, extension, function(err, list){
	if(err) {
		console.err("Problem in mymodule");
		return;
	}

	list.forEach(function(entry){
		console.log(entry);
	});

});