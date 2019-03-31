var obj = Object.create({name:"Roman"});
obj.surname = "Pashkin";
var findInObj = function(key, obj){
        if (key in obj && !obj.hasOwnProperty(key)){
            return obj[key];
        }
		return undefined;
}

module.exports = findInObj;