function addMissingKeys(str, obj){
	var newObj = {}
	newObj = obj;
    if (!(str in obj)){
        newObj[str] = 'new';
    }
    return newObj;
}

module.exports = addMissingKeys;