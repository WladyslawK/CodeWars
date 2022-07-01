//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
function divisors(integer) {
  const divArray = [];
  for(let i = 2; i < integer; i++){
    if(integer % i == 0) divArray.push(i);
  }
  if(divArray.length == 0) return `${integer} is prime`;
  else return divArray;
};

console.log(divisors(12));




////// Best solution on CodeWars
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
