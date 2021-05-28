/*
 *Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
 */

// Solution 1 - Regex

function spinalCase(str){
	  return str.split(/\s|_|(?=[A-Z])/) // "whitespace" "underscore" "Uppercase"
            .join("-")
            .toLowerCase()
}

// Solution 2 

function spinalCase(str){
	//Create variable to store the Regex
	let regex = /\s+|_+/g;

	//Replace low-upper case to low-space-uppercase - ADD SPACE between lower and uppercase
	str = str.replace( /([a-z])([A-Z])/g , "$1 $2");

	//Replace space and underscore with "-"
	return str.replace(regex, "-").toLowerCase()
}

// Solution 3

function spinalCase(str){
	//Add space between lower case and  upper case
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

	return str
			.toLowerCase()
			.split(/(?:_| )+/) //non-capturing group in regex
			.join("-");
}


