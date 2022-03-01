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

let makeUnique2 = word => {
    let uniqueWord = '';

    for(let i = 0; i < word.length; i++){
        let isUnique = true;
        for(let j = 0; j < uniqueWord.length; j++){
            if (word[i] === word[j]) {
                isUnique = false;
            }
        }
        if(isUnique){
            uniqueWord += word[i];
        }
    }
    console.log(uniqueWord);
    return uniqueWord;
}

function unique(string) {
    let uniqueStr = [...new Set(string)].join('')
    return uniqueStr
}


console.log(makeUnique2('helloworld'));
