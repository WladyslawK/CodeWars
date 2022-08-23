function divisibleBy(numbers, divisor){
    let arr = numbers.filter(n => n % divisor === 0)
    return arr
   }