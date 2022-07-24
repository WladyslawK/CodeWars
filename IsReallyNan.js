const isReallyNaN = (val) => {
    console.log(val === val)
    return Number.isNaN(val) ? true : false;
    
  };
  console.log(isReallyNaN(NaN))

