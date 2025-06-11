function sumSquareDifference(number) {
  let squareOfSum = 0;
  let sumOfSquares = 0;
  for (let i = 0; i <= number; i += 1) {
    squareOfSum += i;
    sumOfSquares += i**2;
  }

  return squareOfSum**2 - sumOfSquares;
} 

console.log(sumSquareDifference(3));      // 22
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150