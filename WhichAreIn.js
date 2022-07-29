a1 = ["xyz", "live", "strong", "arp"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2){
    let final = [];
    

    for(let i = 0; i < array2.length; i++){
        for(let j = 0; j < array1.length; j++){
            if(array2[i].includes(array1[j]) && final.indexOf(array1[j]) < 0){
                final.push(array1[j])
            }
        }
    }
    
    return final.sort();
  }

  console.log(inArray(a1, a2))