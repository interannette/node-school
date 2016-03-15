function foo() {
	var bar = "a";
	quux = "c";
	function zip() {
		bar = true;
		var quux = "b";
	}
	return zip;
}