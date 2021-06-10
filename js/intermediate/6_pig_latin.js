/*
 *Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

// My Solution

function translatePigLatin(str){
  let pigLatin;
  let vowel_regex = /^[aeiou]/;
  let consonant_regex = /(^[^aeiou]+)([aeiou])(.*)/;
  if(vowel_regex.test(str)){
    return str + "way"
  }
  else if( consonant_regex.test(str) ){
    return `${str.replace(consonant_regex, '$2$3$1')}${"ay"}`
  }
  else{
    return str + "ay"
  }
}

translatePigLatin("consonant");
}

// Solution 1

function translatePigLatin(str){
	let consonantRegex = /^[^aeiou]+/;
	let myConsonants = str.match(consonantRegex);
	return myConsonants !== null 
		? str
			.replace(consonantRegex, "")
			.concat(myConsonants)
			.concat('ay')
		: str.concat("way");
}

// Solution 2

function translatePigLatin(str){
	var pigLatin = "";
	var regex = /[aeiou]/gi; //find all occurances of vowels

	// Check if the first characer is a vowel
	if(str[0].match(regex)){
		pigLatin = str + "way";
	} else if (str.match(regex) === null){
		//Check if the string contains only consonants
		pigLatin = str + "way";
	}
	else{
		var vowelIndice = str.indexOf(str.match(regex)[0]);
	// Take the string from the first vowel to the last char
	// then add the consonants that were previously omitted and add the ending
	pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
	}
	return pigLatin
}

// Solution 3

function translatePigLatin(str){
	let regex = /^[aeiou]/ //find a vowel at the beginning
	let consonantRegex = /^[^aeiou]/
	if(str.match(regex)){
		return str + "way";
	}
	const consonantCluster = str.match(consonantRegex)[0];
	return str.substring(consonantCluster.length) + consonantCluster + "ay"
}

// Solution 4 

function translatePigLatin(str){
	return str
			.replace(/^[aeiou]\w*/, "$&way")
			.replace(/(^[^aeiou]+)(\w*)\, "$2$1ay");
}

// Solution 5

function translatePigLatin(str, charPos = 0){
	return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
		? str + (charPos === 0 ? 'way' : 'ay')
		: charPos === str.length
			? str + 'ay'
}

















