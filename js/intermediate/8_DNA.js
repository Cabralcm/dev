/*
 *DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 *
 */

// My Solution

function pairElement(str) {
    const match = { "G":"C",
                    "A":"T",
                    "T":"A",
                    "C":"G"};
    let outArray = [];
    for(let i = 0; i < str.length; i++){
        outArray.push([str[i],match[str[i]]]);
    }
    return outArray;
}

pairElement("GCG");

// My Solution 2

function pairElement(str){
    const match = { "G":"C",
                    "A":"T",
                    "T":"A",
                    "C":"G"};
    return str.split('').map(letter => {
        return [letter, match[letter]];
    });
}

// My Solution 3

function pairElement(str){
    const match = { "G":"C",
                    "A":"T",
                    "T":"A",
                    "C":"G"};
    return str.split('').map(letter => [letter, match[letter]);
}






