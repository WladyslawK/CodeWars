function dontGiveMeFive(start, end){
  let arr = 0;
    for(let i = start; i <= end; i++){
        if((""+i).includes("5")) continue;
        arr++
  }
    return arr
}

console.log(dontGiveMeFive(1,20))
