function isHappy(n) {

    let iterator = 0
    let value = n
    let tempValue = n

    while(iterator < 200){

        tempValue = String(value).split("")
        value = 0
        for(let i = 0; i < tempValue.length; i++){
            value = value + Math.pow(Number(tempValue[i]), 2)
        }
        if(value === 1) return true
        iterator++
    }
    return false

  }

 const isHappy2 = (n) => {
    let arr = []
    while (n !== 1 && arr.indexOf(n) === -1) {
      arr.push(n);
      n = n.toString().split('').reduce((p, n) => p + Math.pow(Number(n), 2), 0);
    }
    return n === 1;
  }

  console.log(isHappy2(7))