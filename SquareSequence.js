const squares = (x, n) =>  {
    const array = []
    let square = x
    for(let i = 0; i < n; i++){  
      if(i==0){
        array.push(square)
      }else{
        square *= square
        array.push(square)
      }
    }
    return array
  }
  