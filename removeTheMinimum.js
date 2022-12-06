function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === smallest) {
            return [...numbers.slice(0, i), ...numbers.slice(i+1)]
        }
    } 
  return []
}