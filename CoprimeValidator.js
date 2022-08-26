function isCoprime(x, y) {
    // your code here
    const xCoprime = []
    const yCoprime = []
    for(let i = 1; i <= x; i++){
      if(x%i===0) xCoprime.push(i)
    }
    console.log("XCoprime: ", xCoprime)
  
    for(let i = 1; i <= y; i++){
      if(y%i===0) yCoprime.push(i)
    }
    console.log("YCoprime: ", yCoprime)
  
    const finalArr = xCoprime.filter(item => yCoprime.includes(item))
  
  
    console.log("finalArray", finalArr)
    if(finalArr.length===1 && finalArr[0]===1) return true
    else return false
  
  }
  
  console.log("Answer: ", isCoprime(12, 39))