//make the CamelCase from  list-style-image == listStyleImage
function camelize(str) { 
    return str
      .split('-')
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

console.log(camelize("list-style-image"))

// finds the number between the provided nums a b
let arr = [5, 3, 8, 1];

function filterRange(str, a, b) {
    const filtered = str.filter(item => (item >= a && item <= b));
    return filtered;
  }

  console.log(filterRange(arr, 1, 4))


  //deleting numbers that are not in scope betwee provided nums a and b from array 

  function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<a || arr[i]>b){
            arr.splice(i, 1);
            i--;
        }
    }
  }

  console.log(filterRangeInPlace(arr, 1, 4))
  console.log("Arr: ", arr)


let arr1 = [5, 2, 1, -10, 8];

//sorting the array from biggest to lowest
const ArraySort = (arr) => {
    return arr.sort((a, b) => b - a);
}
console.log(ArraySort(arr1))
console.log(arr1)


//sort the array with copy
const arr2 = ["HTML", "JavaScript", "CSS"]
const copySort = (arr) => {
    const sorted = []
    arr2.map(item => sorted.push(item));
    return sorted.sort();
}

console.log("Sorted Copy Array: ", copySort())
console.log(arr2)


function Calculator(name){
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = (str) =>{
        let arr = str.split(" ");
        let a = +arr[0];
        let b = +arr[2];
        let op = arr[1];

        return this.methods[op](a, b)
    }
    
    this.addMethod = (name, func) => {
        this.methods[name]=func;
    }
}

let calc1 = new Calculator("John");
console.log(calc1.calculate("3 + 7"))
calc1.addMethod("/", (a, b) => a / b)
calc1.addMethod("*", (a, b) => a * b)
calc1.addMethod("**", (a, b) => Math.pow(a,b))
console.log("6 / 2 = ", calc1.calculate("6 / 2"))
console.log("6 * 2 = ", calc1.calculate("6 * 2"))
console.log("2 ^ 3 = ", calc1.calculate("2 ** 3"))


//Make the array of names out of the array of the object 

let vasyl = { name: "Vasyl", age: 25 };
let piotr = { name: "Piotr", age: 30 };
let michal = { name: "Michał", age: 28 };

let users = [ vasyl, piotr, michal ];

let names = users.map(item => item.name);
console.log(names)
alert( names );





//make the array with full name and 
let arni = { name: "Arnold", surname: "Schwarcneger", id: 1 };
let jason = { name: "Jason", surname: "Statham", id: 2 };
let adam = { name: "Adam", surname: "Mickiewicz", id: 3 };

let users1 = [ arni, jason, adam ];

let usersMapped = users1.map(item => {return {"id": item.id, "fullName": `${item.name} ${item.surname}`}})

/*
usersMapped = [
  { fullName: "Arnold Schwarcneger", id: 1 },
  { fullName: "Jason Statham", id: 2 },
  { fullName: "Adam Mickiewicz", id: 3 }
]
*/

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName ) 

//sort the user by age

const sortByAge = (arr) =>{
    return arr.sort((a, b) => a.age -b.age)
    //arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let arn = { name: "Arnold", age: 25 };
let jas = { name: "Jason", age: 30 };
let adm = { name: "Adam", age: 28 };

let arr3 = [ arn, jas, adm ];

console.log(sortByAge(arr3));

// after sort
// alert(arr[0].name); // Arnold
// alert(arr[1].name); // Adam
// alert(arr[2].name); // Jason



//Random sort 

arr4 = [1, 2, 3];
function randomSort(arr) {
    return arr.sort(() => Math.random() -0.5);
}

//get average age

const getAverage = (arr) => {
    return Math.round(arr.reduce((sum, next) => sum + next.age, 0) / arr.length);
}
console.log(getAverage(arr3))

//return unique elements of the array

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hello", "Hello", "world", "world",
  "Hi", "CapeTown", "world", "Hello", ":-O"
  ];
  
  console.log("Unique: ", unique(strings) ); // Hi CapeTown :-O
