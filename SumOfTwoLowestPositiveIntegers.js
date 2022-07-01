let numbers = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {  
   const [a, b] = numbers.sort((a, b) => a -b);
    return a + b;
  }

  console.log(sumTwoSmallestNumbers(numbers));
console.log("Initial Numbers Array: ", numbers)
