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

const decode = (s) => {
    let a = s.split("").filter((symbol, index) => index % 2 === 0).join("")
    let b = s.split("").filter((symbol, index) => index % 2 !== 0).reverse().join("")
    return a + b
}