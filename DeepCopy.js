let state = {
    name: "IT school",
    age: 1,
    school: {
        address: "Barcelona",
        director: {firstName: "Andrew"}
    }
}

let stateArray = [state, state]

//let stateCopy = {...state}   //shallow copy
//let stateCopy = {...state, school: {...state.school}}   //deep copy with spread operator
//let stateCopy = JSON.parse(JSON.stringify(state))   // deep copy with JSON.parse(JSON.stringify(obj))  takes a lot of memory
//deep copy with Array method map (Array of objects)

let stateArrayCopy = stateArray.map(obj => ({...obj, school: {...obj.school}}))

let stateCopy = {...state,  school: {...state.school, director: {...state.school.director}}}

stateCopy.name = "Computer Science"
console.log(state.name)
console.log(stateCopy.name)

stateCopy.school.address = "Rzeszow"
console.log(state.school.address)
console.log(stateCopy.school.address)

stateCopy.school.director.firstName = "Bogdan"
console.log(state.school.director.firstName)
console.log(stateCopy.school.director.firstName)

// array copy check

stateArrayCopy[0].school.address = "Warsaw"
stateArrayCopy[0].school.director.firstName = "Andrzej"

console.log(stateArray)
console.log(stateArrayCopy)










