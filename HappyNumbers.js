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