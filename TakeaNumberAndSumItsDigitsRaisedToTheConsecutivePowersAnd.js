const sumDigPow = (a, b) => {
    const array = []
    for(let i = a; i <= b; i++){
      let num = i
      let checkNum = 0
      let numLength = String(i).length
      for(let j = 0; j < numLength; j++){
        checkNum += Math.pow(+String(num)[j], j+1)
      }
      if(num===checkNum) array.push(num) 
    }
    return array
} 