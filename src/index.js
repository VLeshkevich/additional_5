module.exports = function check(str, bracketsConfig) {
	if (str.length%2 != 0) return false;
	var stack = [];
	for(var i = 0; i < str.length; i++){
		for(var j=0; j<bracketsConfig.length; j++){
			if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0])
				stack.pop();
			else if (str[i] == bracketsConfig[j][0])
				stack.push(str[i]);
			}
	}
	if(stack.length == 0){
		return true;
	}
		else return false;
	}