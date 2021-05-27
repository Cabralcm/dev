/*
 *
 * Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

// Solution 1

function sumAll(arr) {
  let first;
  let second;
  let sum = 0;

  if (arr[0] > arr[1]){
    first = arr[1]
    second = arr[0]
  }
  else{
    first = arr[0]
    second = arr[1]
  }

  for(let i = first; i <= second; i++){
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);

// Solution 2

function sumAll(arr){
	let first = Math.max(...arr)
	let second = Math.min(...arr)
	
	for(let i = first; i<=second; i++){
		sum += i
	}
	return sum;
}

// Solution 3

function sumAll(arr){
	const startNum = arr[0];
	const endNum = arr[1];
	
	//Find the count of the numbers, find by subtracting the abs diff and adding one (to be inclusive)
	const numCount = Math.abs(startNum - endNum) + 1

	//Arithmetic Progression summing formula
	const sum = ( (startNum + endNum) * numCount / 2)
	return sum;
}

// Solution 4
function sumAll(arr){
	let sum = 0;
	for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
		sum += i;
	}
	return sum;
}

// Solution 5 - Recursive Solution

function sumAll(arr){
	const [first,last] = [...arr].sort((a,b) => a - b);
	return first !== last
		? first + sumAll([first + 1, last]
		: first;
}


sumAll([4,1]);


