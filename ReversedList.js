const reverseList = (arr) => arr.reverse();

const reverseList2= (arr) => {
    let reversed = [];
    for(let i = arr.length -1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseList2([1,2,3]))


function reverseList3(arr) {
    let res = [];
    for(let e of arr) {
      res.unshift(e);
    }
    return res;
  }