function toLowerCamelCase(str){
    var words = str.toLowerCase().split(' ');
    for (var i = 1; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } 
    return words.join('');
}
module.exports = toLowerCamelCase;