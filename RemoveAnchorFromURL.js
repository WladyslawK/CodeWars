function removeUrlAnchor(url){
    const arr = []
    for(let i = 0; i < url.length; i++){
      if(url[i] === "#") break;
      arr.push(url[i])
    }
    return arr.join("")
  }