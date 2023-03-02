const trim = (str, size) =>  str.length <= size ? 
    str: size > 3 ? `${str.slice(0, size-3)}...` :
    `${str.slice(0, size)}...`
 

const trim1 = (str, size) => {
    if(str.length <= size){
        return str
    } else if(size <= 3){
        return `${str.slice(0, size)}...`
    } else {
        return `${str.slice(0, size-3)}...`
    }
}

function trim2 ( str, size ) {
    if ( str.length <= size ) {
      return str;
    }
    
    const real = str.slice(0, size);
    
    return `${real.length < 4 ? real : real.slice(0, -3)}...`;
  }