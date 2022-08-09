function anagrams(word, words) {
    let wordCheck = word.split("").sort().join("");
    let final = [];
    console.log(wordCheck);

    for(let i = 0; i < words.length; i++){
        if(words[i].split("").sort().join("") === wordCheck) final.push(words[i])
    }

    return final;
}