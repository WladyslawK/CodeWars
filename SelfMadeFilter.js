const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

    const selfMadeFilter = (array, func) => {
    
    const newArray = []

    for (let i = 0; i < array.length; i ++){
        const newValue = func(array[i])
        if(newValue) newArray.push(array[i])
    }

    return newArray
}

console.log(selfMadeFilter(students, st => st.scores >= 100))