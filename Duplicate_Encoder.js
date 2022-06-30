    //https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
    function duplicateEncode(word){
        //let result = word.split("");
      word = word.toLowerCase();  
      let subArray = []
        let final = [];
            for(let i = 0; i < word.length; i++){
                if(subArray.indexOf(word[i]) == -1){
                    
                    final[i] =  "(";
                    subArray[i] = word[i];
                }else if(subArray.indexOf(word[i]) != -1){
                    final[subArray.indexOf(word[i])] = ")";
                    final[i] = ")";
                }
            }
      
        return final.join("");
        }

    console.log(duplicateEncode("dind"));

///// Best Solution on CodeWars

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}



///////////////////////////////
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}
