function methodFilter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports = methodFilter;