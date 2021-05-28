/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArr(arr1, arr2){
	var newArr = [];
  let hashMap1 = {}
  let hashMap2 = {}
  for(let i = 0; i < arr1.length; i++){
    hashMap1[arr1[i]] = true;
  }
  for(let i = 0; i < arr2.length; i++){
    hashMap2[arr2[i]] = true;
  }
  for(let i = 0; i < arr1.length; i++){
    if (!(arr1[i] in hashMap2)){
      newArr.push(arr1[i])
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if (!(arr2[i] in hashMap1)){
      newArr.push(arr2[i])
    }
  }
  return newArr;
}

console.log(diffArr([1,2,3,5], [1,2,3,4,5]));

// Solution 2 - Two sets of For loops

function diffArray(arr1, arr2) {
  var outArray = [];
  function addElements(arr1, arr2, outArr){
    for(let i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1){
        outArr.push(arr1[i])
      }
    }
  }
  addElements(arr1, arr2, outArray)
  addElements(arr2, arr1, outArray)
  return outArray
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Solution 3 - Using Filter

function diffArray(arr1, arr2) {
  return arr1
          .concat(arr2)
          .filter( (element)  => {
            return !arr1.includes(element) ||
            !arr2.includes(element)
          });
}

// Solution 4

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)]; //takes place of concat

  function diff (a_array, b_array){
    return a_array.filter( (element) => {
      return b_array.indexOf(element) === -1;
    });
  }
}
