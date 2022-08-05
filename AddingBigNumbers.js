function add(a, b) {
    let index = Math.max(a.length, b.length)
    
    index--;
    let sumNum = 0; 
    let answer = []
    let arrA = [...a.split("")];
    let arrB = [...b.split("")];

while(index >= 0){
    if(arrA[arrA.length-1] != undefined && arrB[arrB.length-1] != undefined){
        
        sumNum = +arrA.pop() + +arrB.pop()
        if(sumNum >= 10){
            
            answer.unshift(Number(String(sumNum)[1]))
            if(arrA[arrA.length-1] != undefined) arrA[arrA.length-1]++;
            else if(arrB[arrB.length-1] != undefined) arrB[arrB.length-1]++;
            else {
                answer.unshift(1); 
            }
        }
        else{
            answer.unshift(sumNum);
        }
    } 
    else if(arrA[arrA.length-1]!= undefined && arrB[arrB.length-1] ==undefined) answer.unshift(+arrA.pop())
    else if(arrA[arrA.length+1]== undefined && arrB[arrB.length-1] !=undefined) answer.unshift(+arrB.pop())
    sumNum
    index--;
    console.log("Array answer length: ", answer.length)
    console.log(answer)
}

    let pos = answer.length-1;

    while (pos>=0) {
        
        if(answer[pos]>=10){
            answer[pos] = Number(String(sumNum)[1]);
            if(answer[pos-1] != undefined) {
                answer[pos-1]++; 
            }else{
                answer.unshift(1)
            }
        }
        pos--;

    }

return answer.join("").toString();
}

console.log(add("99999", "1"))