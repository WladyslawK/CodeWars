const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1) : -1;

console.log(findNextSquare(121));