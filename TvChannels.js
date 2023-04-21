function redarr(arr) {
    const result = {}
      const unique = arr.filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    
    unique.forEach((item, index) => {
      result[index] = item
    })
      
      console.log(result)
                  
      return result
    }