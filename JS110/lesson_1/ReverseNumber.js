function reverseNumber(number) {

  /* let reversed = 0;
  while (number >= 10) {
    reversed = reversed * 10 + (number % 10);
    number = parseInt(number / 10); 
  }
  return reversed * 10 + number; */
  
  return parseInt(number.toString().split('').reverse().join(''));
  
}

console.log(reverseNumber(12345));    // 54321  
console.log(reverseNumber(12213));    // 31221  
console.log(reverseNumber(456));      // 654  
console.log(reverseNumber(12000));    // 21 // Note that leading zeros in the result get dropped!  
console.log(reverseNumber(1));        // 1