function sumOfSums(numbers) {
  return numbers.reduce((accum, _, outterIdx) => {
    for (let innerIdx = 0; innerIdx <= outterIdx; innerIdx += 1) {
      accum += numbers[innerIdx];
    }
    return accum;
  }, 0)}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21  
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36  
console.log(sumOfSums([4]));              // 4  
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35