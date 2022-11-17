function min(a, b){
    
    if(isNaN(a) || isNaN(b))
        return NaN
    if(a === null){
        return b === null ? 
          0 : 0 < b ?
          0 : b 
    }
  else if(b === null){
        return 0 < a ? 0 : a
    }
    return (a < b) ? a : b
  }