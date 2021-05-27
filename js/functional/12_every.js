// Solution 1 - Arrow function

function checkPositive(arr){
	return arr.every(val => val > 0);

}
checkPositive([1,2,3,4,-5]);

// Solutio 2 - Typical Function

function checkPositive(arr){
	return arr.every(function(element){
		return element > 0;
	});
}

checkPositive([1,2,3,4,-5]);
