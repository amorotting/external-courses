function evenOdd (array){
	var oddEvenZero = [0, 0, 0];
    var a, r;
    for(a = 0; a < array.length; a++){
		if (array[a] === 0) {
			oddEvenZero[2]++;
		} else if (array[a]!== null){
			r = array[a] % 2;
			if (r === 1){
				oddEvenZero[1]++;
			} else if (r === 0){
				oddEvenZero[0]++;
			}
		} 
	}
	return oddEvenZero;
}
module.exports = evenOdd;