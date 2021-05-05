
// Input: String of alphanumeric characters separated by white spaces
// Output: Length of the longest word in the provided sentence

// Solution 1 - Using Reduce()


function findLongestWordLength(str){
    return str.split(' ').reduce( (longest, word) =>{
        return Math.max(longest, word.length);},
        0)
}

// Solution 2 - Using For Loop

function findLongestWordLength2(str){
    let array = str.split(' ');
    let longest = 0;
    for(let i =0; i < array.length; i++){
        if(array[i].length > longest){
            longest = array[i].length;
    }
    return longest;
}

// Solution 3 - Using Map()

function findLongestWordLength3(str){
    return Math.max(...str.split(' ').map(word => word.length))
}

// Solution 4 - Recursion

function findLongestWordLength4(str){
    const words = str.split(" ");
    
    //words only has 1 element left, that is the longest element
    if(words.length == 1){
        return words[0].length

    return Math.max(
        words[0].length, 
        findLongestWordLength4(words.splice(1).join(" "))
}

// First line splits the string into an array containing individual words
// Check if words only has 1 element left, if so, that is the longest element in the array (obviously)
// Extract the length of the first word
// words.splice(1) removes all the elements, starting from Index 1, and returns the result
// words.splice(1).join(" ") turns the array back into a string, with each word separated by a white space!
// The newly re-created word is passed recursively back into the original function, with one word less
//
// The final result of the Math.max() is the length of every word from the string
// Math.max() will simply return the largest value, which corresponds to the length of the largest string



