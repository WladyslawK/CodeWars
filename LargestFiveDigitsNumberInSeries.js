function solution(digits){
    let answer = 0;
    for(let i = 0; i < digits.length - 4; i++){
      if(answer < digits.slice(i, i+5)) answer = digits.slice(i, i+5);
    }
    return +answer;
  }