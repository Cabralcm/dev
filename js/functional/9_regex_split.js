function splitify(str) {
  // Only change code below this line
    let output =  str.split(/[^a-zA-z]/i)
    console.log(output)
    return output

  // Only change code above this line
}
splitify("Hello World,I-am code");

// Function 2

function splitify(str){
	return str.split(/\W/)
}
splitify("Hello World, I-am code");
