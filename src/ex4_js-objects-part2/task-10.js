function turnOver(str){
    var strArray = str.split('');
    var turned = [];
    var turnedStr;
    var x = str.length;
    for (var i = x - 1, j = 0; i >= 0; i--){
        turned[j] = strArray[i];
        j++;
    }
    turnedStr = turned.join("");
    return turnedStr;
}
module.exports = turnOver;