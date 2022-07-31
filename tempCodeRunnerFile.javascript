


////////// Corrected
function digitize(n) {
        return n.toString().split("").reverse().map(Number);
      }
////////////


let n = 12345;

function digitize(n) {
  //code here
  
let nCopy = String(n);
let j = nCopy.length -1;
let reversed = [];
console.log(j);
for(let i = 0; i < nCopy.length; i++){
      while(reversed[i] == undefined){
          reversed[i] = +nCopy[j];
      }
      j--;
  }
return reversed;
}

console.log(digitize(n)); 
