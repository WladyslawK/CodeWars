var orderedCount = function (text) {
    let final = [];
    let amount = 0;
    
  for(let i = 0; i < text.length; i++){
    
    for(let j = 0; j < final.length; j++){
      if(final[j].includes(text[i])){
        amount = final[j][1]++;
      }   
      
    }
    if(amount > 0){
      amount = 0;
      continue; 
    }
    
    final.push([text[i], 1]);
    amount = 0;
  }

  return final;
  }

  
  console.log(orderedCount("abracadabra"))