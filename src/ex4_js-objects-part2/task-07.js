function adaptStringToNum(string, number){
	var str;
	if(string.length > number){
		for(var i=0; i<number; i++){
			str = string.slice(0, number-1) + '…';
		}
	}
	return str;
}
module.exports = adaptStringToNum;