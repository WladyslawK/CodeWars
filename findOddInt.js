function findOdd(A) {
    //happy coding!
    let numbers = [];
    let appearCount = 0;
    
    for(let i = 0; i < A.length; i++){
        if(!numbers.includes(A[i])) numbers.push(A[i])
    }
    console.log(numbers)

    for(let i=0; i < numbers.length; i++){
        for(let j=0; j < A.length; j++){
            if(numbers[i]==A[j]) appearCount++;
        }

        if(appearCount == 3 || appearCount == 1 || appearCount % 2 == 1) return numbers[i]
        appearCount = 0;
    }
    
    return 0;
  }