function multiplyAllPairs(array1, array2) {
  let result = [];
  
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  }) 
  return result.sort((number1, number2) => number1 - number2);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
