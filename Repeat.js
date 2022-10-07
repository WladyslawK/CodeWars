console.log(sumFirstNumbers(4))

const sMap = (array, func) => {
    const finalArray = []
    for(let i = 0; i < array.length; i++){
        finalArray[i] = func(array[i])
    }
    return finalArray
}

const ar1 = [1,2,3,4,5,6]

console.log(sMap(ar1, (item)=>item + 2))
console.log(ar1.map(item => item + 2))