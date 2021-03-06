// Filter method
//

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let i = 0; i < this.length; i++){
    if (callback(this[i])){
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// Filter Method 2
//

Array.protptype.myFilter = function(callback){
	// Only change code below this line
	var newArray = [];
	this.forEach(function(x){
		if(callback(x) === true){
			newArray.push(x);
		}
	});
	return newArray;
};
