var array = [2,4,6,8];
function showElements(array){
    var b;
    
    for(b = 0; b < array.length; b++){
        console.log(array[b]);
    } 
    
    console.log(array.length);
}
module.exports = showElements;