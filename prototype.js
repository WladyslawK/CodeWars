const alex = {
    name: "Alex",
    showName(){
        console.log(this.name)
    } 
}


const hanna = {
    name: "Hanna"
}

alex.showName()

const callback = alex.showName.bind(hanna)

callback()

// prototype

const baseUser = {
    name: "Base"
}

const user = {
    showName(){
        console.log(this.name)
    }
}

const superUser = {
    name: "SuperUser",
    isSuper: true
}

const hanna2 = {
    name: "Hanna 2"
}

baseUser.__proto__ = null
user.__proto__ = baseUser
superUser.__proto__ = user
hanna2.__proto__ = superUser

console.log(hanna2)
hanna2.showName()

// 

const foo = () => {
    console.log("Hello")
}

console.dir(userCreator)

function userCreator(name){
    this.name = name
}

const us1 = new userCreator("User 1")

console.log(us1.name)
console.log(us1.__proto__.constructor)

// constructor -> object -> creting new object by created object

function CreateUser(name){
    this.name = name
}

const user1 = new CreateUser('Alex')
const user2 = new alex.constructor("Hanna")

console.log(user1)
console.log(user2)