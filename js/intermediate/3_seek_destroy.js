// Seek and Destroy
/*
 *Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
 */

// Solution 1

function destroyer(arr, ...parameters) {
  let inputs = [...parameters]
  let hashMap = {}
  let output = []
  for(let i = 0; i < inputs.length; i++){
    hashMap[inputs[i]] = true;
  }
  for(let i = 0; i < arr.length; i++){
    if(!(arr[i] in hashMap)){
      output.push(arr[i])
    }
  }
  return output;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Solution 2

function destroyer(arr) {
  // let inputs = [...parameters]
  let inputs = Array.from(arguments).slice(1)
  let hashMap = {}
  let output = []
  for(let i = 0; i < inputs.length; i++){
    hashMap[inputs[i]] = true;
  }
  for(let i = 0; i < arr.length; i++){
    if(!(arr[i] in hashMap)){
      output.push(arr[i])
    }
  }
  return output;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Solution 3

function destroyer(arr){
	let valsToRemove = Object.values(arguments).slice(1)
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < valsToRemove.length; j++){
			if(arr[i] === valsToRemove[j]){
				delete arr[i]
			}
		}
	}
	return arr.filter(item => item !== null) //remove the empty/null spaces
}

// Solution 4

function destroyer(arr){
	let valsToRemove = Array.from(arguments).slice(1)
	return arr.filter( val => {   // keep the elements that are not in "valsToRemove" array
		return !valsToRemove.includes(val)
		});
}

// Solution 5

function destroyer(arr, ...valsToRemove){
	return arr.filter( elem => !valsToRemove.includes(elem) );
}
