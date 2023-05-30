function twoSum(numbers, target) {
    const answer = []

    numbers.forEach((number, index) => {
        for(i = index + 1; i < numbers.length; i++){
            if(number + numbers[i] === target){
                answer.push(index)
                answer.push(i)
            }
        }
    })
    return answer.slice(0, 2)
  }