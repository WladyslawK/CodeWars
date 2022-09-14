const productArray = (numbers) => numbers.map(x => numbers.reduce((prev, curr) => prev * curr) / x)

// function productArray(numbers){
//     const output = []
//     for(let i = 0; i < numbers.length; i++){
//         const newArr = [...numbers]
//         newArr.splice(i, 1)
//         output.push(newArr.reduce((prev, curr)=> prev * curr))
//     }
//     return output
//   }