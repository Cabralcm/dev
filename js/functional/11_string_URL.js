var globalTitle = "Winter Is Coming";

// My Solution

// Only change code below this line
function urlSlug(title) {
    let outArray = title.toLowerCase().split(/\W/)
    outArray = outArray.filter((word) => word != "")
    return outArray.join("-")
}
// Only change code above this line

// Solution 2

function urlSlug(title){
	return title
		.toLowerCase() // converts string to lower case
		.trim() // remove white space at front and end of string
		.split(/\s+/) //locate one or more whitespace characters --> creates array
		.join("-") // converts array to string, with "-" as delimiter
}

// Solution 3

function urlSlug(title){
	return title
		.split(" ") //create array separated by empty string
		.filter( substr => substr != "") // duplicates of empty string created from above step if they existed in the input "title" string
		.join("-") // convert array to string with "-" as the delimiter
		.toLowerCase(); //this can be applied as the first step, or the last step
}	
var winteriscoming = urlSlug(globalTitle)
}
