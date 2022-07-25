function getDivisorsCnt(n){
    let arr = []
    if(n===1) return 1
      for(let i = 0; i <= n; i++){
        if(n % i === 0) arr.push(i);      
      }
    return arr.length;
  }

  console.log(getDivisorsCnt(10))