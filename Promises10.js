//Promise

const alex = {
    getFileWithCode(){
        return new Promise((res, rej)=>{
            setTimeout(() => {
                res("Some data from file")
                //rej("file Error")
            }, 2000)
        })
    }
}

const prop = alex.getFileWithCode()
console.log(prop)


alex.getFileWithCode()
//.then(response => console.log(response))
.catch(error => console.log(new Error(error)))
.finally(() => console.log("Finally"))



alex.getFileWithCode()
.then((res) => {
    console.log("Then :", res)
    return 2
})
.then((res) => {
    console.log("Then 2: ", res)
})
.catch((res)=> {
    console.log(Error(res))
})


alex.getFileWithCode()
.then((res) => {
    console.log("Then 1")
})
.then((res) => {
    console.log("Then 2")
    console.log(hello)
})
.catch((res)=> {
    console.log(Error(res))
})
.then((res) => {
    console.log("Then 3")
})
.then((res) => {
    console.log("Then 4: ")
    console.log(a)
})
.catch((res)=> {
    console.log(Error(res))
})

//Promises part 1
//------------------------



const p1 = new Promise((res, rej)=> {
    setTimeout(()=> {
        //res("Second Data set")
        rej("Error while opening a file")
    }, 3000)
})

const p2 = alex.getFileWithCode()

const allPromise = Promise.all([p1, p2])
const allSetteledPromise = Promise.allSettled([p1, p2])

allPromise.then(res => {
    console.log("--------------")
    console.log(res[0])
    console.log(res[1])
}).catch(error => {
    console.log(Error(error))
})

const promContainer = document.getElementById("Promise")
allSetteledPromise.then((response)=> {
    
    //create paragraph
    const p1 = document.createElement("p")
    
    //put Text inside
    p1.innerText = response[1] ? response[1].value : ""

    response[1] ? console.log(response[1]) : ""
    response[0].status === "fulfilled" ? console.log(response[0]) : 
    console.log(response[0].reason) 

    //put paragraph into div
    promContainer.appendChild(p1)

})


const usesrsAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "Andrew"}, {name: "Igor"}, {name: "Mike"}])
    },
    login(login, password) {
        if(login === "123" || password === "123"){
            return Promise.reject("Incorrect login or password")
        }else{
            return Promise.resolve({id: 1, name: "Witold", age: "25"})
        }
    }
}

usesrsAPI.getAllUsers()
.then(res => {console.log("Users: ", res)})
.catch(error => {console.warn(error)})

usesrsAPI.login("123", "0000")
.then((res) => {console.log("Login: ", res)})
.catch(error => console.log(error))


const makeGoogleRequest = () => fetch("https://api.publicapis.org/entries")

makeGoogleRequest()
.then(res => res.json())
.then(res => console.log(res))
.catch(error => console.log(error))