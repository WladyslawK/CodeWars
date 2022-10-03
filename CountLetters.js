function getCount(str) {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if("aeiou".includes(str[i])) count++
    }
    return count
  }

console.log(getCount("abracadabra")) 

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}