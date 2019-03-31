function insertString(string, newString, number){
    var str = string.split(' ');
    str.splice(number + 1, 0, newString);
    return str.join(' ');
}
module.exports = insertString;