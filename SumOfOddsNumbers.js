function rowSumOddNumbers(n) {
    ///if(n === 1) return 1;
    
    let amount = 0;
    let arr = [1];

    for(let i = 0; i < n; i++){
        amount +=i;
    }
    amount += n;
    for(let i = 1; i < amount; i++){
        arr[i] = arr[i-1] + 2;
    }
    arr = arr.slice(amount - n).reduce((sum, item) => sum + item);
    return arr;
}

console.log(rowSumOddNumbers(42))