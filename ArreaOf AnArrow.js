function arrowArea(a,b) {
    let s = a * b;
    let d = Math.sqrt(a*a + b*b)/2
    let p = (d+d+a)/2;
    let result = Math.sqrt(p* (p -a) * (p - d) * (p - d));
    result = Number.parseFloat(result).toFixed(2)
    return result;
  }
  console.log(arrowArea(7, 6))