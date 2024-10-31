const readline = require("readline-sync");


function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString(num);
  } else if (num < 0 || Object.is(num, -0)) {
    return '-' + integerToString(-num);
  } else {
    return integerToString(num);
  }
}

function integerToString(num) { 
   
  let remaining = num;
  let stringNum = '';

  do {
    stringNum = DIGITS[remaining % 10] + stringNum;
    remaining = Math.floor(remaining / 10);
  } while (remaining > 0);

  return stringNum;

}
console.log(signedIntegerToString(4321) === "+4321");  
console.log(signedIntegerToString(-123) === "-123");  
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");