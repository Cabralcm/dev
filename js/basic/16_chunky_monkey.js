
// My Solution

function chunkArrayInGroups(arr, size) {
  let outArr = [];
  let curArr = [];
  let count = 0;
  for(let i = 0; i < arr.length ; i++){
    curArr.push(arr[i]);
    count++;
    if(count >= size){
      outArr.push(curArr)
      curArr = []
      count = 0
    }
  }
  if(count < size && curArr.length){
    outArr.push(curArr);
  }
  return outArr;
}

// Solution 1 - Similar as above, but using Modulo instead of Count variable

function chuckArrayInGroups(arr,size){
	let temp = [];
	let result = [];
	for(let a = 0; a < arr.length; a++){
		if(a % size !== size - 1){
			temp.push(arr[a]);
		}
		else{
			temp.push(arr[a]);
			result.push(temp);
			temp = [];
		}
	}
	if(temp.length !==0){
		result.push(temp);
	}
}

// Solution 2 - For Loop -  Using Slice and Jumping by intervals of Size

function chunkArrayInGroups(arr, size){
	let newArr = [];
	for(let i = 0; i < arr.length; i+= size){
		newArr.push(arr.slice(i, i + size)); // Slice returns an array
	}

}

// Solution 3 - While Loop -  Using Slice, and Jumping by Intervals of Size

function chunkArrayInGroups(arr, size){
	let newArr = []
	let i = 0;
	while(i < arr.length){
		newArr.push(arr.slice(i, i + size));
		i += size;
	}
	return newArr;
}

// Solution 4 - Splice (which removes sub-arrays)

function chunkArrayInGroups(arr,size){
	let newArr = [];
	while(arr.length > 0){
		newArr.push(arr.splice(0, size)); 
		//splice will remove from the front of arr, subarrays, of length **size**
	}
	return newArr;
}


// Solution 5 - Slice and Concat

function chunkArrayInGroups(arr,size){
	if(arr.length <= size){
		return[arr];
	}
	else{
		return [arr.slice(0,size)].concat(
			
	}

}


// Test Case
chunkArrayInGroups(["a", "b", "c", "d"], 2);
