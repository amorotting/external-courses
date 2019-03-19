function equalElements(array){
    for (var i = 1; i < array.length; i++){
        if (array[i] !== array[0]){
            return false;
        }
    } 
    return true;
}
module.exports = equalElements;