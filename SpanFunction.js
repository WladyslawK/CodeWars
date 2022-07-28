function isEven (x) {
    return Math.abs(x) % 2 === 0;
  }
  var arr = [2,4,6,8,10];



  function span (arr, predicate){
    if(arr.length === 0) return [[], []];
    
    let arcopy = [...arr];
    let newArr = [];
    let index;

    for(let i = 0; i < arr.length; i++){
      if(predicate(arr[i])=== false) {
          index = i;
          break;
      }
    }
    
    if(index === undefined){
        newArr.push(arr);
        newArr.push([]);
        return newArr;
    }
    

    newArr.push(arcopy.splice(0, index));
    newArr.push(arcopy)
    return newArr
  }
  
console.log(span(arr, isEven))

