   //https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
   function arrayDiff(a, b) {
        let final = [...a];
        if(b.length == 0) return a;
        for(let i = 0; i < b.length; i++){
            final = final.filter(function(value, index, arr){
                return value != b[i];
            })
        }
        return final;
      }
      
      console.log(arrayDiff([1,2,2], [2]));


///// Best solution on CodeWars

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
