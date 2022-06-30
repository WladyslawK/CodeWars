//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string){
    let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < lettersArray.length; j++){
            if(string[i] == lettersArray[j]) lettersArray.splice(j, 1);
          }
      }
      return lettersArray.length ? false : true;
}
    
    console.log(isPangram("The quick brown fox jumps over the lazy dog."));

//////// Best CodeWars solution

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}




function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
