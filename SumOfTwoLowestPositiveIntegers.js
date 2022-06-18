let numbers = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let min = numbers[0];
    let minIndex;
    let result = 0;
    let numbersCopy = [];
  
  for(let i = 0; i < numbers.length; i++){
    numbersCopy[i] = numbers[i];
  }
  
  
    for(let i = 0; i < 2; i++){
       for(let i = 0; i < numbers.length; i++){
       if(min > numbersCopy[i]){
         min = numbersCopy[i];
         minIndex = i;
       }
     } 
     numbersCopy.splice(minIndex, 1);
     console.log("After splice: ", numbersCopy)
     result += min; 
     min = numbersCopy[0];
     minIndex = 0;
    }
   
    return result;
  }

  console.log(sumTwoSmallestNumbers(numbers));
console.log("Initial Numbers Array: ", numbers)
