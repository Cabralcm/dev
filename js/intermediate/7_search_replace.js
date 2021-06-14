/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

// Solution

function myReplace(str, before, after){
	let lowerAfter = after.toLowerCase();
	let upperRegex = /^[A-Z]/
	let replaceRegex = new RegExp(before, 'g');
	if(upperRegex.text(before)){
		lowerAfter = lowerAfter.slice(0,1).toUpperCase() + lowerAfter.slice(1);
	}
	return str.replace(replaceRegex, lowerAfter);
}

// Solution 1

function myReplace(str, before, after){
	// Find index where before is on string
	let index = str.indexOf(before); 
	// Check to see if the first letter is uppercase or not
	if(str[index] === str[index].toUpperCase()){ // Check if string is already capitalized
	//Change the after word to be capitalized before we use it
	after = after.charAt(0).toUpperCase() + after.slice(1)
	}else{
	// Change the after word to be uncapitalized before we use it
	after = after.charAt(0).toLowerCase() + after.slice(1);
	}
	// Now replace the original str with the editted one.
	str = str.replace(before,after)

	return str;
}

// Solution 2

function myReplace(str, before, after){
	let regex = /^[A-Z]/
	if(regex.test(before){
	after = after[0].toUpperCase() + after.substring(1);
	}else{
	after = after[0].toLowerCase() + after.substring(1);
	}
	// Return string with argument "before" replaced by argument
	return str.replace(before, after);
}

// Solution 3

function myReplace(str, before, after){
	// Create a function that will change the casing of any number
	// matching parameter "source"
	
	function applyCasing(source, target){
		//Split the source and target strings to array of letters
		let targetArr = target.split("");
		let sourceArr = source.split("");
		//iterate through all of the items of sourceArr, and targetArr
		//Until loop hits the end of the shortest array
		for(let i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
			//Find out the casing of every letter from sourceArr using Reg Ex
			if(/[A-Z]/.test(sourceArr[i])){
				targetArr[i] = targetArr[i].toUpperCase();
			}
			// if sourceArr[i] is not upper case then convert targetArr[i] to lower case
			else{
				targetArr[i] = targetArr[i].toLowerCase();
			}
		}
		// join modified targetArr to string and return
		return targetArr.join("");
	}

	return str.replace(before, applyCasing(before,after));
}

// Solution 4

//Add new method to the String object, not overriding it if one exists already

String.prototype.capitalize = 
	String.prototype.capitalize || 
	function() {
		return this[0].toUpperCase() +  this.slice(1);
	}


const Util = (function() {
	//Create utility module to hold helper functions
	function textCase(str, tCase){
		//Depending if the tCase argument is passed we either set the case of the 
		// given string or we get it
		// Those functions can be exspanded for other text cases.
		
		if(tCase){
			return setCase(str, tCase);
		}else{
			return getCase(str);
		}

		function setCase(str, tCase){
			switch(tCase){
				case "uppercase":
					return str.toUpperCase();
				case "lowercase":
					return str.toLowerCase();
				case "capitalized":
					return str.capitalized();
				default:
					return str;
			}
		}
		function getCase(str){
			if(str === str.toUpperCase()){
				return "uppercase";
			}
			if (str === str.toLowerCase()){
				return "lowercase";
			}
			if (str === str.capitalize()){
				return "capitalized";
			}
			return "normal";
		}
	}
	return {
		textCase
	};
})();

function myReplace(str, before, after){
	const { textCase } = Util;
	const  regex = newRegExp(before, 'gi');
	const replacingStr = textCase(after, textCase(before));

	return str.replace(regex, replacingStr);
}

// Solution 5

function myReplace(str, before, after){
	const myArr = str.split(" ");
	const [wordToReplace] = myArr.filter(item => item === before) //this assumes a single word match
	return wordToReplace[0].toUpperCase() !== wordToReplace[0]
		? myArr.map(item => (item === before ? after: item)).join(" ")
		: myArr
			.map(item =>
				item === before ? after[0].toUpperCase() + after.slice(1) : item
			)
			.join(" ");
}


