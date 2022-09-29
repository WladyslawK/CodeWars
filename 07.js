//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (expression, count, devider) => {
    let finalExspression = ""
    for(let i = 0; i < count -1; i++){
        finalExspression = finalExspression + expression + devider
    }    
    finalExspression = finalExspression + expression
    return finalExspression
}

const repeatString2 = (expression, count, devider) => (expression + devider).repeat(count - 1) + expression


// function repeatString(substring, countOfRepeat, separator) {
//     let newValue = '';
//     for (let i = 1; i <= countOfRepeat; i++) {
//         i !== countOfRepeat ? (newValue += substring + separator) : (newValue += substring)
//     }
//     return newValue
// };



console.log("repeated String: ", repeatString("yo", 3, " "))
console.log("repeated String: ", repeatString("yo", 3, ","))

console.log("repeated String: ", repeatString2("yo", 3, " "))
console.log("repeated String: ", repeatString2("yo", 3, ","))



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (expression, start) => expression.slice(0, start.length).toLowerCase() === start

const checkStart2 = (str, subStr) => str.toLowerCase().startsWith(subStr.toLowerCase())


console.log("checkStart: ", checkStart("Incubator", "inc"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку 
//из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (expression, count) => expression.slice(0, count) + "..."

const truncateString2 = (expression, count) => {
    let finalExspression = ""
    for(let i = 0; i < count; i++){
        finalExspression += expression[i]
    }
    return finalExspression + "..."
}

console.log("truncateString: ", truncateString("Всем студентам инкубатора желаю удачи!", 10))
console.log("truncateString2: ", truncateString2("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово 
//в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (expression) => expression.split(" ").reduce((prev, curr) => curr.length < prev ? prev = curr : prev)

const getMinLengthWord2 = (expression) => {
    const arrayWords = expression.split(" ")
    let shortestW = arrayWords[0]
    for(let i = 0; i < arrayWords.length; i++){
        if(arrayWords[i]<shortestW) shortestW = arrayWords[i]
    }
    return shortestW
}

console.log("getMinLengthWord: ", getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log("getMinLengthWord2: ", getMinLengthWord2("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где 
//все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (expression) => expression.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

console.log("setUpperCase: ", setUpperCase("Всем студентам инкубатора желаю удачи!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.

const isIncludesAbsolute = (expression, includeVal) => {
    const stringLowerCase = expression.toLowerCase()
    const subStringLowerCase = includeVal.toLowerCase()
    let result = true

    for(let i = 0; i < subStringLowerCase.length; i++){
        if(!stringLowerCase.includes(subStringLowerCase[i])){
            result = false
        }
    }

    return result
}


const isIncludes = (expression, includeVal) => {
    const expr = expression.toLowerCase()
    const lookupVal = includeVal.toLowerCase()
    const arrLookup = []

    for(let i = 0; i < lookupVal.length; i++){
        if(expr.includes(lookupVal[i])) arrLookup.push(lookupVal[i])
    }

    return arrLookup.join("") === lookupVal ? true : false
}

const isIncludes2 = (expression, includeVal) => {
    const expr = expression.toLowerCase()
    const lookupVal = includeVal.toLowerCase()
    const arrLookup = []

    for(let i = 0; i < lookupVal.length; i++){
        if(expr.includes(lookupVal[i]) && !arrLookup.includes(lookupVal[i])) arrLookup.push(lookupVal[i])
    }
    
    return arrLookup.join("") === lookupVal ? true : false
}


const isIncludes3 = (expression, includeVal) => {
    let asociative = {}
    const expr = expression.toLowerCase()
    const incl = includeVal.toLowerCase()

    for(let i = 0; i < expr.length; i++){
        if(asociative[expr[i]] !== undefined){
            asociative[expr[i]] += 1
        }else{
            asociative[expr[i]] = 1
        }
    }

    for(let i = 0; i < incl.length; i++){
        if(asociative[incl[i]] > 0) asociative[incl[i]] -= 1
        else return false
    }
    //console.log("associative: ", asociative)
    return true
}

console.log("isIncludes: ", isIncludes3("Incubator", "Cut"))
console.log("=============")


console.log("isIncludes: ", isIncludesAbsolute("Incubator", "Cut"))
console.log("isIncludes: ", isIncludesAbsolute("Incubator", "table"))
console.log("isIncludes: ", isIncludesAbsolute("Incubator", "inbba"))
console.log("isIncludes: ", isIncludesAbsolute("Incubator", "inba"))
console.log("isIncludes: ", isIncludesAbsolute("Incubator", "Incubatorrr"))

console.log("-----------------")


console.log("isIncludes: ", isIncludes("Incubator", "Cut"))
console.log("isIncludes: ", isIncludes("Incubator", "table"))
console.log("isIncludes: ", isIncludes("Incubator", "inbba"))
console.log("isIncludes: ", isIncludes("Incubator", "inba"))
console.log("isIncludes: ", isIncludes("Incubator", "Incubatorrr"))

console.log("---------------------------------------")


console.log("isIncludes: ", isIncludes2("Incubator", "Cut"))
console.log("isIncludes: ", isIncludes2("Incubator", "table"))
console.log("isIncludes: ", isIncludes2("Incubator", "inbba"))
console.log("isIncludes: ", isIncludes2("Incubator", "inba"))
console.log("isIncludes: ", isIncludes2("Incubator", "Incubatorrr"))


console.log("---------------------------------------")


console.log("isIncludes: ", isIncludes3("Incubator", "Cut"))
console.log("isIncludes: ", isIncludes3("Incubator", "table"))
console.log("isIncludes: ", isIncludes3("Incubator", "inbba"))
console.log("isIncludes: ", isIncludes3("Incubator", "inba"))
console.log("isIncludes: ", isIncludes3("Incubator", "Incubatorrr"))


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true



const isIncludesA = (str, subStr) => {
    return subStr.toLowerCase().split('').map(el => str.toLowerCase().indexOf(el, 0) >= 0 ? true : false).every(el => el)
}

const isIncludesB = (str, subStr) => {

    let uniqueItems1 = [...new Set(str.toLowerCase())]
    let uniqueItems2 = [...new Set(subStr.toLowerCase())]
    let uniqueItemslenUn =  [...uniqueItems1,...uniqueItems2]
    let uniqueItemslen = [...uniqueItems1,...uniqueItems2].length
    let uniqueItems3 = [...new Set(uniqueItemslenUn)]
    return (uniqueItems3.length + uniqueItems2.length) == uniqueItemslen

    }





