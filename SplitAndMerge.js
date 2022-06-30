//https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
        //let separation = string.split(" ").join("").split("").join(separator);
        let separation = string.split(" ")
        let result = "";
        for(let i = 0; i < separation.length; i++){ 
            result = result + separation[i].split("").join(separator)+" ";
        }
        return result;
      }

///////////// CODEWARS BEST Solution
      function splitAndMerge1(string, separator){ 
        return string.split(" ").map(str => str.split("").join(separator)).join(" ")
    }


      console.log(splitAndMerge1("My name is John", ","))
      //console.log(splitAndMerge("Hello World!","."))
