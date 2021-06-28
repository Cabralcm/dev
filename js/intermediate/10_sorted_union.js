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
	newArr = args.reduce(function (arrA, arrB){
		return arrA.concat(
			arrB.filter( function(i){
					return arrA.indexOf(i) === -1;
			})
		);
	});
	return newArr;
}

// Solution 4

function uniteUnique(arr){
	let concatArr = [];
	let i = 0;
	while(arguments[i]){ //flatten array
		concatArr = concatArr.concat(arguments[i]);
		i++;
	}
	uniqueArray = concatArr.filter( function(item, pos){
		return concatArr.indexOf(item) == pos; //indexOf() will find the FIRST position in which that element is located! 
		// will return FALSE for same elements with different positions!
	});
	return uniqueArray;
}

// Solution 5

function uniteUnique(...arrays){
	// Make an array out of the given arrays and flatten it (using the spread operator)
	const flatArray = [].concat(...arrays);

	// Create a Set which clears any duplicates since it's a regular set and not a multiset
	return [...new Set(flatArray)];
}

// Solution 6

function uniteUnique(...arr){
	return [...new Set(arr.flat())]
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())]


