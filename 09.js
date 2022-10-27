//globalLE -> {sayHi: Function} -> null


sayHi()

let name = "Alex"


function sayHi() {
    //sayHiLE {greeting: Hi, } -> globalLE

    let greeting = "Hi"

    function foo () {
        //{ } -> sayHiLE
        console.log(greeting + ' ' + name)
    }

    
}


const counter = () => {
    let count = 0

    return () => {
        console.log(++count)
    }
}

const count = counter()
const count1 = counter()

//

const counter1 = () => {

    return () => {

    }
}

const count2 = counter1()

console.log("Hello")


const encode = (s) => {

    let arr = ""
    let begin = 0 
    let end = s.length - 1

    while(begin < end){
        arr = arr + s[begin] + s[end]
        begin ++;
        end --;
    }

    if(s.length % 2 != 0){
        const index = Math.round((s.length - 1) / 2)
        console.log(index)
        arr += s[index]
    }

    return arr
}




console.log(encode("white"))
console.log(encode("codewars"))
console.log(encode("Hello world!"))




const decode = (s) => {
    let a = s.split("").filter((symbol, index) => index % 2 === 0).join("")
    let b = s.split("").filter((symbol, index) => index % 2 !== 0).reverse().join("")
    return a + b
}

console.log(decode("csordaew"))
console.log(decode("wehti"))


///

  
  const getLastDigit = (index) => {
    let prevfib = 0
    let currfib = 1
    let answer = 0
    for(let i = 1; i < index; i++){
        answer = prevfib + currfib
        prevfib = currfib
        currfib = answer        
    }
    return answer
  }

  console.log(getLastDigit(1000))