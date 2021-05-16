// Refactor Global Variables out of Functions


// Copying an Array

function add(arr, bookName){
	let newArr = [...arr];
	// let newARr = [...arr, bookName]
	newArr.push(bookName);
	return newArr;
}

function remove(arr, bookName){
	let updatedBookList = [...arr]
	var book_index = updatedBookList.indexOf(bookName);
	if(book_index >=0){
		updatedBookList.splice(book_index, 1)
		return updatedBookList;
	}
}

function remove(arr, bookName){
	let updatedBookList = [...arr]
	if(newArr.indexOf(bookName) >= 0){
		newArr.splice(newArr.indexOf(bookName), 1);
	}
	return newArr;
}


// Using Filter() function
// Filter() creates a NEW array with all the elements that pass the test implemented by the provided function
// Applies the function to each element in the new array

function add(arr, bookName){
	return (...list, bookName]
}


function remove(arr, bookName){
	return list.filter(book => book !== bookName);
}
