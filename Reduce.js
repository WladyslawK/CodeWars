let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];


console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

const sts = {
    "Bob": {
        age: 22,
        isMarried: true,
        scores: 85
    },
    "Alex":{
        age: 21,
        isMarried: true,
        scores: 89
    }, 
}


console.log(students.reduce((acc, el)=>{
    acc[el.name]= {...el}
    delete acc[el.name].name
    return acc
}, {}))

///add 10 to all scores
console.log(students.reduce((acc, el)=> {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))


// return al those who have more than 100

console.log(students.reduce((acc, el)=> {
    if(el.scores >= 100)
    acc.push({...el })
    return acc
},[]))

const nums1 = [1, 2, 3, 2, 4, 5, 2, 7]

console.log(nums1.reduce((acc, el)=> {
    if(acc[el]){
        acc[el] = acc[el] + 1
    }else{
        acc[el] = 1
    }
    return acc
}, {}))
////////////////////// training

//reduce to sum
console.log("Reduce to sum: ", nums.reduce((prev, curr)=> prev + curr))
console.log("Reduce to make associative array: ", students.reduce((prev, curr)=>{
    prev[curr.name] = {...curr}
    delete prev[curr.name].name
    return prev
}, {}))
console.log("Typical Map operation: ", students.map(student => ({...student, scores: student.scores += 10})))
console.log("Using reduce: ", students.reduce((prev, curr) => {
    prev.push({...curr, scores: curr.scores += 10})
    return prev
}, []))

console.log("Tipical Filter: ", students.filter(student => student.age >=21))
console.log("Reuce to filter: ", students.reduce((prev, curr) => {
    if(curr.age >= 21)
    prev.push(curr)
    return prev
}, []))

console.log(nums1.reduce((prev, curr) => {
    if(prev[curr]){
        prev[curr] += 1
    }else{
        prev[curr] = 1
    }
    return prev
}, {}))