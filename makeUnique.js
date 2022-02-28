// Write your solution below:
/*
Write a function to remove all duplciate letters from a provided string. 
The string will only contail lowercase letters between a - z. The string will not contain spaces.
For example:
>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

let makeUnique = word => {
    let uniqueWord = '';

    for(let i = 0; i < word.length; i++){
        if(!(uniqueWord.includes(word[i]))){
            uniqueWord += word[i];
        }
    }
    return uniqueWord;
}

console.log(makeUnique('iwanttoclimbamountain'));