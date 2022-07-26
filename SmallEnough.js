function smallEnough(a, limit){
    let arr = a.filter(item => item <= limit)
    return arr.length === a.length ? true : false;
  }