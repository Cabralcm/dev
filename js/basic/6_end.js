
function confirmEnding(str, target){

	return str.slice(str.length - target.length) === target;
}


function confirmEnding(str, target) {
  // RegExp is created where the match term must be at the end of the string
	// Use case in-sensitive ("i" flag)

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}


function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

