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