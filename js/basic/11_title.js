
// 1 
// Original Solution

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

// 2 Using Replace

// Split string into array of words
// Split the sentence
//
// Replace on each word to capitialize the letter
// Create a new string with pieces of the previous one and at the end merge everything into a single string again
// Replace() method, first argument as position of the first letter using charAt. 
// Second argument, write function to return the capitalized letter as the replacement

function titleCase(str){
	// Redefining the function replaceAt()
	String.prototype.replaceAt = function(index, character){
		return( this.substr(0,index) + character + this.substr(index + character.length));
};

function titleCase(str){
	var newTitle = str.split(" ");
	var updatedTitle = [];
	for(var st in newTitle){ //iterate through each word in the original string
		updatedTitle[st] = newTitle[st]
		.toLowerCase()
		.replaceAt(0, newTitle[st].charAt(0).toUpperCase()
		); // extract the word from the original string
		// convert all letters to lowercase
		// convert only the first letter of the string to uppercase!
	}
	return updatedTitle.join(" "); //recreate the original string - every element in the array should be separated by an empty string " "
}

// 3 using Map() instead of For loop

function titleCase(str){
	let convertToArray = str.toLowerCase().split(" "); // convert all characters to lowercase, and convert into array
	let result = convertToArray.map(
		function(val){

}




console.log(titlecase("I'm a little tea pot!"));
