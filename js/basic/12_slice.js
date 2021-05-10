
// My Solution - Using "SPREAD" operator

function frankenSplice(arr1, arr2, n) {
  let outArray = [...arr2.slice(0,n), ...arr1, ...arr2.slice(n,)]
  return outArray;
}

// 1)  Slice to extract, splice to insert using a for loop

function frankenSplice(arr1, arr2, n){
	let localArray = arr2.slice(); // copy of arr2
	for(let i = 0; i < arr1.length; i++){
		localArray.splice(n, 0, arr[i]); // insert element from arr1 into arr2, the 0 indicates a deleteCount of 0
		n++;	// increment the index in arr2 that we insert elements
	}


}

// 2) Slice and Splice using Spread Operator

function frankenSplice(arr1, arr2, n){
	let localArr = arr2.splice(); // copy of arr2
	localArr.splice(n, 0, ...arr1); //insert array into arr2, with 0 elements deleted!
	return localArr;
}




frankenSplice([1, 2, 3], [4, 5, 6], 1);
