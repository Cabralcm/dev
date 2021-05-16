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
