//!use strict - this -> object
//use strict -> can be anything



//1. Global scope

//2. this in function
   //can be called through the word new
   //called through the functions methods: call, apply, bind
   //with help of object call
   //simple function call

//3. this inside arrow function -> (there is now this inside arrow func 2. alwas search for this in outside scope
// doesn`t depend on function call)

//================= GLOBAL ===============
a = 10

console.log(this === window)
console.log(this.a)



//=============== FUNCTIONS ===============


//=============== called through key word new - this => always will be an object =============
function User(name) {
    //this = {}
    this.name = name
    //return this
}

const alex = new User("Alex")
const hanna = new User("Hanna")

console.log(alex)
console.log(hanna)

//=========== call by methods of functions call apply bind ========

function foo(a, b){
    console.log(a)
    console.log(b)
    console.log("THIS: ", this)
}

//foo.call({name: "call"}, 1, 2)

//foo.apply({name: "apply"}, [1, 2])

foo.bind({name: "bind"}, 1)(2) 

//console.log()

//================ with call of the objects method ==========

const al = {
    name: "Alex",
    showName (){
        console.log(this.name)
    }
}

al.showName()

const han = {
    name: "Hanna",
    showName(){
        console.log(this.name)
    }
}

han.showName()


//============= simple function call ==============

function foo1 () {
    console.log(this) //undefined -> window
}

foo1()

const al1 = {
    name: "Alex1",
    showName: () => {
        console.log(this === window)
    }
    
}

//============== ARROW ===========

function foo2 () {
    console.log(this)
}

foo2()


function foo3 () {


    // -> undefined -> object window

    (() => {
        console.log(this)
    })()

}

foo3()



const user = {
    name: "alex", 
    showName: () => {
        console.log(this.name)
    }
}

user.showName()