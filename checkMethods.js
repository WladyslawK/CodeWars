const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"],
    address: {
        city: "Rzeszow",
        street: "3 Maja"
    }
}

console.log("-----------")

let shalCopy = Object.assign({}, user)
shalCopy.address.city = "Gdynia"
console.log("Shallow copy: ", shalCopy)
console.log(shalCopy.address.city)
console.log(user.address.city)


console.log("-----------")

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
 console.log(user===copyUser)//- что должно быть в консоли?
 console.log(user.friends===copyUser.friends) //- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = Object.assign({}, user);



//Проверка:
console.log(user===deepCopyUser) //- что должно быть в консоли?
console.log(user.friends===deepCopyUser.friends) //- что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(copyStudents[0].name) // Bob- что должно быть в консоли?
console.log(copyStudents[2].name) // Nick- что должно быть в консоли?
console.log(copyStudents[3].age) // 19- что должно быть в консоли?
console.log(copyStudents[4].scores) // 110- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(student => student);
console.log("4. Deep Copy: ", deepCopyStudents)

//Проверка:
console.log(deepCopyStudents == students)// false - что должно быть в консоли?
console.log(deepCopyStudents[0] === students[0]) //true - что должно быть в консоли?
console.log(deepCopyStudents[3].age) // 19- что должно быть в консоли?
console.log(deepCopyStudents[4].scores) // 110- что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents];
console.log("5. Alfabet Sort: ", sortedByName.sort((a, b) => a.name.localeCompare(b.name)));

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = [...deepCopyStudents];
console.log("5a. Sort by Scores: ", sortedByScores.sort((a, b) => b.scores - a.scores));

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(student => student.scores >= 100);
console.log("6. Array of Students have more than 100: ", bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).splice(0, 3);
console.log("6a. Three first students: ", topStudents)
console.log("6a. The rest of the after Splice: ", deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log("6b. Arrays after splice has been merged: ", newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(student => student.isMarried === false);
console.log("7. Not Married students: ", notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(student => student.name);
console.log("8. Students name array: ", studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = deepCopyStudents.map(student => student.name).join(" ");
console.log("8a. Array of names with space", namesWithSpace)
let namesWithComma = deepCopyStudents.map(student => student.name).join(",");;
console.log("8a. Array of names with comma", namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(student => ({...student, isStudent: true}));
console.log("9.Array with the new value isStudent: ", trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(student => student.name === "Nick" ? {...student, isMarried: true} : student);
console.log("10. Array after Nick has Married: ", studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(student => student.name === "Ann");
console.log("11. Student Ann", ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = newDeepCopyStudents.reduce((prev, curr) => {
    if(curr.scores > prev.scores) prev = curr
    return prev
});
console.log("12. Best student: ", bestStudent)
console.log(newDeepCopyStudents)
//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.map(student => student.scores).reduce((a, b) => a + b)
console.log("13. Sum of all students scores: ", scoresSum)



// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

console.log("Friends", students[0].friends)
const addFriends = (students) => students.map(student => ({...student, friends: students.map(friend => friend.name).filter(friend => friend !== student.name)}))

 const addFriends2 = (students) =>{
    
    for(let j = 0; j < students.length; j++){
        let friends = []
        for(let i = 0; i < students.length; i++){ 
            if(students[i].name !== students[j].name){
                friends = [...friends, students[i].name]
            }    
        }
        students[j] = {...students[j], friends: friends}
        friends = []
    }
    return students
 }

//console.log(addFriends(students));
//console.log(addFriends2(students))


// 15. Напишите функцию getBestStudents, которая принимает параметром массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10)

const getBestStudents = (students, amount) => {
    return students.map(student => student).sort((a, b) => b.scores - a.scores).slice(0, amount)
}


console.log(getBestStudents(students, 3))
console.log(students)









