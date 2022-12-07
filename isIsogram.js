const isIsogram = (str) => {
    const comp = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(comp.slice(i+1).includes(comp[i])) return false
    }
    return true
  }


  const isIsogram2 = (str) => new Set(str.toLowerCase()).size === str.length