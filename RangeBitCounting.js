function rangeBitCount(a, b) {
    let arr = [];
    let res = 0;
    
    for(let i = a; i <= b; i++){
        arr.push(Number(i).toString(2));
    }
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split("");
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == '1') res ++;
        }
    }
  
    return res;
  }

  console.log(rangeBitCount(2, 7));