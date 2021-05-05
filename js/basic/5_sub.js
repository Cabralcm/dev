function largestOfFour(arr){
	let sumArr = [];
	for(let i = 0; i < arr.length; i++){
		sumArr.push(Math.max(...arr[i]));
	}
	return sumArr;
}

// Map + Reduce

function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
