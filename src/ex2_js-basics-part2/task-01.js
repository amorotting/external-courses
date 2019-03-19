function typeOf (a) {
	var result;
	if (typeof a === "string") {
		result = "string";
	} else if (typeof a === "number" && isNaN(a) !== true){
		result = "number";
	} else {
		result = undefined;
	}
	return result;
};

module.exports = typeOf;
