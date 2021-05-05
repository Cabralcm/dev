function titleCase(str){
	let outString = "";
	let flag = true;
	for(let char of str){
		if(char === " "){
			flag = true;
			outString += char;
		}
		else if (flag){
			outString += char.toUpperCase();
			flag = false;
		}
		else{
			outString += char.toLowerCase();
		}		
	}
	return outString;
}

console.log(titlecase("I'm a little tea pot!"));
