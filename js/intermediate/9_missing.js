/*
 *Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

// Solution

function fearNotLetter(str) {
  let count = str[0].charCodeAt();  
  for(let i = 0; i < str.length; i++){
    if(count !== str[i].charCodeAt()){
      return String.fromCharCode(count);
    }
    count++;
  }
  return undefined;
}

fearNotLetter("abce");

// Solution 1

function fearNotLetter(str){
	for(var i = 0; i < str.length; i++){
		var code = str.charCodeAt(i);

		if(code !== str.charCodeAt(0) + i){ //If code is not equal to the first char int + number of iterations (indexes) - that is, the expected character
			// actual char code vs expected char code
			return String.fromCharCode(code - 1); // return the missing character since code is always one step ahead of the missing character
		}

	}

	return undefined;
}

// Solution 2

function fearNotLetter(str){
	let currentCharCode = str.charCodeAt(0);
	let missing = undefined;

	str
		.split("")
		.forEach(letter =>{
			if(letter.charCodeAt(0) === currentCharCode){
				currentCharCode++;
			}
			else{
			missing = String.fromCharCode(currentCharCode);
			}
		});
	return missing;
}

// Solution 3

function fearNotLetter(str){
	for(let i = 1; i < str.length; ++i){
		if(str.charCodeAt(i) - str.charCodeAt(i-1) > 1){ //compare the next char and current char, and see if they are within 1 int of each other
			return String.fromCharCode(str.charCodeAt(i-1) + 1); // Missing character
		}
	}
}

// Solution 4

function fearNotLetter(str){
	let allChars = "";
	let notChars = new RegExp("[^" + str + "]", "g");

	for(let i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++){
		allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
	}
	return allChars.match(notChars) ? allChars.match(notChars).join("") : undefined;

}

