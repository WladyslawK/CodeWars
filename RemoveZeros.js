const moveZeros = (arr) => {
    const arrNonZeros = []
    const arrZeros = []
    arr.map(item => item === 0 ? arrZeros.push(0) : arrNonZeros.push(item))
    return [...arrNonZeros, ...arrZeros] 
  }