

function union(array1, array2) {
  
  let combinedArray = [];  
  let arrays = [array1, array2];
  arrays.forEach(array => {
    array.forEach(element => {
      if (!combinedArray.includes(element)) {
        combinedArray.push(element);
      } 
    })
  });
  return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
