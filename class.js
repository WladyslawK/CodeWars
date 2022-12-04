//class

class Car {
    constructor(model){
        this.model = model

        this.showName = function () {
            console.log(this.model)
        }
    }

    wheels = 4

    showName1(model){ 
        console.log(model)
    }

    
}

const vehicle = new Car("BMW")

const vehicle2 = new vehicle.__proto__.constructor("volvo")
console.log(vehicle2)

vehicle.showName()

console.log(vehicle) // true
console.log(vehicle.__proto__.showName1(vehicle.model))
console.dir(Car)


// static fields and methods (like Array.isArray())

class home {

    constructor(name){
        this.name = name
    }

    static street = "Slowackiego"
    static showStreet() {
        console.log(this.street)
    }
}

const h1 = new home("HomeTown")

home.showStreet()
//h1.showStreet()

// private fields (incapsulation of logic)

class user {
    #firstName
    #lastName

    constructor(firstName, lastName){
        this.#firstName = firstName
        this.#lastName = lastName
    }

    getFullName(){
        return this.#firstName + " " + this.#lastName
    }
}

const u1 = new user('John', "Parker")
console.log(u1.__proto__)
console.dir(user.prototype)


// super 

class motorbike {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showName(){
        console.log(this.name + " " + this.age)
    }

}

class FordBike extends motorbike{
    constructor(name, age, color){
        super(name, age)
        this.color = color
    }

    getDescription(){
        super.showName()
    }
}


const moto = new FordBike("bike 1", 10, "green")

console.log(moto)
moto.getDescription()