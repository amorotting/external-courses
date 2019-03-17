function maxElement(array){
    var max = array[0];
    var a;
    for (a = 1; a < array.length; a++){
        if (array[a] >= max){
            max = array[a];
        }
    }
    return max;
}

module.exports = maxElement;