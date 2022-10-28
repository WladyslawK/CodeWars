const xMarksTheSpot = (input) => {
    const finalArr = []
    for(let i = 0; i < input.length; i++){
      for(let j = 0; j < input[i].length; j++){
        if(input[i][j]==="x") {
          finalArr.push(i)
          finalArr.push(j)
        }
      }
    }
    return finalArr.length === 0 || finalArr.length > 2 ? [] : finalArr
    }