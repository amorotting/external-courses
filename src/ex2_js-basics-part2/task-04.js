function equalElements(array){
    var m;
    for (m = 1; m < array.length; m++){
        if (array[m] !== array[0]){
            return false;
        }
    } 
    return true;
}
module.exports = equalElements;