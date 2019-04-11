function methodMap(array, callback) {
    var newMappedArray = [];
    for (i = 0; i < array.length; i++) {
            newMappedArray.push(callback(array[i], i, array));
        }
    return newMappedArray;
    }
module.exports = methodMap;
