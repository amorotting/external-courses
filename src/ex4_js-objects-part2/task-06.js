function capitalizeFirstSymbols(str){
    var str1 = str.split(' ');
    for (i = 0; i < str1.length; i++){
        str1[i] = str1[i][0].toUpperCase() + str1[i].substr(1);
    }
    return str1.join(" ");
}
module.exports = capitalizeFirstSymbols;