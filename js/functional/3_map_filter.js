/*
 * Chain map and filter together
 *
 * First you can map the inputs to new outputs --> Using Map
 *
 * Use the new mappings in filter to select the inputs you want!
 *
 */

var filterList = watchList
	.map(movie => {
		return{
		title:movie.Title
		rating:movie.imdbRating
		};
	})
	.filter(movie => {
		// return true, it will keep the element
		// return false, it will reject (not add or keep) the element
		return parseFloat(movie.rating) >= 8.0 //parseFloat() ensures that the string is returned as a FLOAT! TO make sure we can compare the two numbers property as floats!
	});

// Second Solution
//
// // Add your code below this line

var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

console.log(filteredList)
