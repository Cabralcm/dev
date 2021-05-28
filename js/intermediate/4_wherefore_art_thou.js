/*
 *Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */

// Solution 1

function whatIsInAName(collection, source){
  let keys = Object.keys(source)
  console.log(keys)
  return collection.filter( function(obj) {
      for(let i = 0; i < keys.length; i++){
        if( !obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]] ){ // if key doesn't exist, or no match
            return false;
        }
      }
      return true; // has to pass every KEY in the KEYS array
    });
}

// Solution 2

function whatIsInAName(collection, source){
	let keys = Object.keys(source);
	return collection.filter( (obj) => { // iterate through every Object in collections
		return keys.every( (key) => { //iterate through every KEY in keys
			return obj.hasOwnProperty(key) && obj[key] === source[key] // check if Object contains that key, and key value in Obj matches key value in Source
		});
	});
}

// Solution 3

function whatIsInAName(collection, source){
	let keys = Object.keys(source);
	return collection.filter( (obj) =>{ //iterate through every Object in Collection
		return keys.map( (key) => { // iterate through every key in KEYS, returns an array
			return obj.hasOwnProperty(key) && obj[key] === source[key]; //returns TRUE or FALSE
		}).reduce( (a,b) => {
			return a && b;
		});
	});
}

