function evenOdd (array){
	var oddEvenZero = [0, 0, 0];
    var rest;
    for(var i = 0; i < array.length; i++){
		if (array[i] === 0) {
			oddEvenZero[2]++;
		} else if (array[i]!== null){
			rest = array[i] % 2;
			if (rest === 1){
				oddEvenZero[1]++;
			} else if (rest === 0){
				oddEvenZero[0]++;
			}
		} 
	}
	return oddEvenZero;
}
module.exports = evenOdd;