function largestOfFour(arr){
	let sumArr = [];
	for(let i = 0; i < arr.length; i++){
		sumArr.push(Math.max(...arr[i]));
	}
	return sumArr;
}
