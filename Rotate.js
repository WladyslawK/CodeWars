var rotateMatrix = arr => {
    const rotate = []
    arr[0].forEach((_, i ) => rotate[i] = [])
    
    for(let i = 0; i < arr.length; i++){
      const r1 = arr[i].reverse()
      
      for(let j = 0; j < r1.length; j++){
        
        rotate[j][i] = r1[j] 
      }
    }
    return rotate
  }


  console.log(rotateMatrix([[-1,4,5],[2,3,4]]))

  //[[5,4],[4,3],[-1,2]];