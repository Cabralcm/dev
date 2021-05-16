function alphabeticalOrder(arr){
	return arr.sort(function compareFunction(a,b){
		return a === b ? 0 : 
			a < b : -1 : 
			1;
	});
}

function alphabecticalOrder(arr){
	return arr.sort((a,b) => a === b ? 0 : a < b ? -1 : 1);
}
