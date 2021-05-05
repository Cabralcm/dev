// Using For loop

function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i]
    }
  }
  return undefined;
}

// Using find()
// Method returns the value of the first element in the provided array that satisfies (returns true)  the provided testing function.

function findElement(arr, func){
	return arr.find(func);
}

function findElement(arr, func){
	return arr[arr.map(func).indexOf(true)];
}

/* 1) Look through the array given in the 1st parameter 'arr' using the map() method
 * 2) apply function to each element in the array - use the function in the 2nd parameter as the callback function in arr.map()
 * 3) Acquire the index of the first number that meets the condition in the function indexOf(true)
 * 4) Use that index to display the first available number that meets the condition
 * */

// Recursive Solution

function findElement(arr, func){
	return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

