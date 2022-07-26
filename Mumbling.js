function accum(s) {
    let arr = []
    s = s.toLowerCase().split("");
    
    arr.push(s[0].toUpperCase());
    s.map((item, index) =>{
      for(let i = 0; i < index; i++){
        
        if(i === 0) arr.push(item.toUpperCase());
        
        arr.push(item)
      }
      arr.push("-")
      
    })
    arr.pop();
    return arr = arr.join("")
}

console.log(accum("AbC"))