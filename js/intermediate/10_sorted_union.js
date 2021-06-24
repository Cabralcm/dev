/*
 * Sorted Union
 *
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*
 */


// My Solution

function uniteUnique(arr) {
  let arrays = [...arguments]
  let unique = {}
  let output = []
  for(let i = 0; i < arrays.length; i++){
    for(let j = 0; j < arrays[i].length; j++){
      if(!(arrays[i][j] in unique)){
        output.push(arrays[i][j]);
        unique[arrays[i][j]] = true;
      }
    }
  }
  return output;
}

// Solution 1

function uniteUnique(arr){
	let finalArray = [];
	for(let i = 0; i < arguments.length; i++){
		let arrayArguments = arguments[i]
		for(let j = 0; j < arrayArguments.length; j++){
			let value = arrayArguments[j];
			if(finalArray.indexOf(value) < 0){
				finalArray.push(value)
			}
		}
	}
}

// Solution 2

function uniteUnique(arr){
	let args = [...arguments];
	let results = [];
	for(let i = 0; i < args.length; i++){
		for(let j = 0; i < args[i].length; j++){
			if(!result.includes(args[i][j])){
				result.push(args[i][j]);
			}
		}
	}
}

// Solution 3

function uniteUnique(arr){
	let newArr;
	let args = Array.prototype.slice.call(arguments);

}
