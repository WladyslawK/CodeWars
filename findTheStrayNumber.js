const stray = (numbers) => {
    let arr = []
    for(let i = 0; i < numbers.length; i++){
        if(!arr.includes(numbers[i])) arr.push(numbers[i])
        else if(arr.includes(numbers[i])) arr = arr.filter(element => element !== numbers[i])
    }
    return arr[0]
}