
// My Solution

function mutation(arr) {
  let hashMap = {};
  for(let i = 0; i < arr[0].length; i++){
    hashMap[arr[0][i].toLowerCase()] = true;
  }
  for(let i = 0; i < arr[1].length; i++){
    if (!(arr[1][i].toLowerCase())){
		return false;	
	}
  return true;
}

// Solution 1

function mutation(arr){
	let test = arr[1].toLowerCase();
	let target = arr[0].toLowerCase();
	for(let i = 0; i < test.length; i++){
		if(target.indexOf(test[i]) < 0){ // Check each char in test to see if it exists in target
			return false;
		}
	}
	return true;
}

// Solution 2 - Embed two function calls 

function mutation(arr){
	return arr[1]
		.toLowerCase()
		.split("")
		.every(function(letter){
			return arr[0].toLowerCase().indexOf(letter) != -1;
		});
}

// Solution 3 - Uses Includes and Recursion

function mutation(arr){
	function calcMutation([target, test], i = 0){
		target = target.toLowerCase()
		return  i>= test.length ? true 
			: !target.includes(test[i]) ? false 
			: mutation([target, test], i + 1);
	}
	return calcMutation(arr);
}

