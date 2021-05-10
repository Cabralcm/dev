function bouncer(arr){
	let outArr = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i]){
			outArr.push(arr[i]);	
		}
	}
	return outArr;
}

// using For loop

function bouncer(arr){
	let newArray = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i]){
			newArray.push(arr[i]);
		}
	}	
	return newArray;
}

// Filter() 
/* Creates a new array with all elements that pass
The test implmented by the provided function.
e.g.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "presen]
*/

function bouncer(arr){
	return arr.filter(Boolean); // All the elements result in TRUE, are retained!
}

function bouncer(arr) {
  return arr.filter(element => element)
}





// Unit Test
bouncer([7, 'ate', "", false, 9]);

