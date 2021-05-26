// Solution 1

function sentensify(str) {
  // Only change code below this line
    let strArray = str.split(/\W/);
    return strArray.join(" ")

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");

// Solution 2

function sentensify(str){
	return str.split(/\W/).join(" ");
}
