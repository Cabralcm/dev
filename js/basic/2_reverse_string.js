function reverseString(str){
 let array = str.split('');
 for(let i = 0; i < array.length/2; i++){
  [array[i],array[array.length - i - 1]] = [array[array.length - i - 1], array[i]]; 
 }
 return array.join("")
}

