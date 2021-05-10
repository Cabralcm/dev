
// My Solution

function getIndexToIns(arr, num){
	arr.sort((a,b) => a-b);
	for(let i = 0; i < arr.length; i++){
		if(arr[i] >= num){
			return i;
		}
	}
	return arr.length;
}

// Solution 1 - Needs Sorted Array

function getIndexToIns(arr, num){
	arr.sort(function(a,b) {
		return a-b;
	)};
	for(let a = 0; a < arr.length; a++){
		if(arr[a] >= num){
			return a;
		}
	}
	return arr.length;
}

// Solution 2 - Find how many numbers your NUM is larger than
//Benefit - does not need to sort the array!

function getIndexToIns(arr, num){
	let countIndex = 0;
	for(let i = 0; i < arr.length; i++){
		if(num > arr[i]){
			countIndex++;
		}
	} //Counts how many array numbesr are smaller than Num
	return countIndex; //this equals the num's position in the array based upon the numbers it is larger than!
}

// Solution 3 - While Loop Implementation of Solution 1 and My Solution

function getIndexToIns(arr, num){
	arr.sort((a,b) => a - b);
	/*
	arr.sort(function(a,b){
		return a - b;
	});
	*/
	let i = 0;
	while(num > arr[i]){
		i++;
	}
	return i;
}

// Solution 4 - Put num into array, Sort array, find index of element in array
// Inefficient method

function getIndexToIns(arr,num){
	arr.push(num);
	arr.sort(function(a-b){
		return a-b;	
	});
	return	arr.indexOf(num);
}

// Solution 5 - findIndex()

function getIndexToIns(arr,num){
	let index = arr //apply the methods to arr array
		.sort((curr, next) => curr - next) //sort the array in place (ascending)
		.findIndex(currNum => num <= currNum); // find index s.t. num is less than or equal to currNum (for each number in the sorted array)
	return index === -1 ? arr.length : index; //if no index is found from findIndex function, it will return -1
												// else, it wil return the index to insert the number
}

// Solution 6 - Similar to Solution 4

function getIndexToIns(arr, num){
	return arr
		.conact(num)
		.sort((a,b) => a-b)
		.indexOf(num);
}

// Solution 7 - filter()
// Filter **creates a new array** with all elements that pass the test implemented
// by the provided function

function getIndexToIns(arr,num){
	return arr.filter(val => (num > val)).length
}

// Test case

getIndexToIns([40,60], 50);
