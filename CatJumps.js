function solution(start, finish) 
{
  let currentShelf = start
  let amountOfJumps = 0  
  if(start === finish) return 0
  while(currentShelf < finish){
    
    currentShelf + 3 <= finish ? currentShelf += 3 : currentShelf += 1
    amountOfJumps++
    
  }
    return amountOfJumps
}