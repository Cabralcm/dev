# Return sorted array without changing original array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
    let newArr = arr.slice()
    newArr.sort(function(a,b){ return a - b;})
    return newArr
  // Only change code above this line
}
nonMutatingSort(globalArray);

# Solution 2

var globalArray = [5,6,3,45,56,2];

function nonMutatingSort(arr){
	return [].concat(arr).sort(function(a,b){
		return a - b;
		});
}
nonMutatingSort(globalArray);
