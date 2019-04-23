function countElememtsRegularity(str){
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var key = str.charAt(i);
        if (key in obj) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
	for (var prop in obj) {
        console.log("элемент" + " " + prop + " " + "встречается" + " " + obj[prop] + " " + "раза");;
    }
    return obj;
}
module.exports = countElememtsRegularity;
