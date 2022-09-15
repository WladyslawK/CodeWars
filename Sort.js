const names = ["Donald", "Alex", "Bob", "alex"]

console.log(names.sort())


//1. sort mehod sorts strings inside of array
//2. sorts by unicode
//3. sort works mutably mutate the array
//4. returns the same link on the array
//5. often used with reverse function

console.log(names.sort() === names)

const numbers = [100, 1000, 9, 88, -2, -10, -100]
console.log(numbers.sort())

//sort function
// const compareFn = (a, b) => { //from less to bigger
//     if(a < b){
//         return -1
//     }else {
//         return 1000
//     }
// }
const compareFn = (a, b) => a - b 


console.log(numbers.sort(compareFn))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];


const scoreSort = students.sort((a, b) => a.scores - b.scores) 
console.log(scoreSort)

const nameSort = students.sort((a, b) => a.name < b.name ? -1 : 1)
console.log(nameSort)

const nameSortToLowerCase = students.sort((a, b) => a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1)
console.log(nameSortToLowerCase)

const nameSortLocalCompare = students.sort((a, b) => a.name.localeCompare(b.name))
console.log(nameSortLocalCompare)


const nums = [12, 45, 23, 34, 9, 77, 1]
console.log(nums)


//Buble Sort
for(let j = 0; j < nums.length; j++){
    let isSorted = true
    for(let i = 0; i < nums.length - 1 - j; i++){
        if(nums[i] > nums[i + 1]){
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i+1] = temp
            [nums[i], nums[i + 1] = [nums[i + 1], nums[i]]]
        }
    }
    if(isSorted) break;
}

console.log(nums)
