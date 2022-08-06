//make the CamelCase from  list-style-image == listStyleImage
function camelize(str) { 
    return str
      .split('-')
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

console.log(camelize("list-style-image"))

// finds the number between the provided nums a b
let arr = [5, 3, 8, 1];

function filterRange(str, a, b) {
    const filtered = str.filter(item => (item >= a && item <= b));
    return filtered;
  }

  console.log(filterRange(arr, 1, 4))


  //deleting numbers that are not in scope betwee provided nums a and b from array 

  function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<a || arr[i]>b){
            arr.splice(i, 1);
            i--;
        }
    }
  }

  console.log(filterRangeInPlace(arr, 1, 4))
  console.log("Arr: ", arr)


let arr1 = [5, 2, 1, -10, 8];

//sorting the array from biggest to lowest
const ArraySort = (arr) => {
    return arr.sort((a, b) => b - a);
}
console.log(ArraySort(arr1))
console.log(arr1)


//sort the array with copy
const arr2 = ["HTML", "JavaScript", "CSS"]
const copySort = (arr) => {
    const sorted = []
    arr2.map(item => sorted.push(item));
    return sorted.sort();
}

console.log("Sorted Copy Array: ", copySort())
console.log(arr2)
