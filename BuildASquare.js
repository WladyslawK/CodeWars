function generateShape(integer){
    let output = "";
    for(let i = 0; i < integer; i++){
      for(let j = 0; j < integer; j++){
        output += "+"
      }
      if(i < integer - 1)output += "\n"
    }
    
    return output
  }
  console.log(generateShape(3))