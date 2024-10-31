const readline = require('readline-sync');
const divisor = 10n;
const zero = 0n;
const one = 1n;

const digitsIn = fib => {
  let digits = one;
  let newFib = fib;
  let modulus;
  while (newFib >= divisor) {
    newFib = newFib / divisor;
    digits += one;
  }
return digits;
}

const lengthMet = (current, digits) => {

  return current >= digits; 
}
const findFibonacciIndexByLength = (digits) => {
  let index = one;
  let lastAndPenultimateFib = [one, zero];
  let met;
  do {
    lastAndPenultimateFib = nextFibNumber(lastAndPenultimateFib);
    met = lengthMet(digitsIn(lastAndPenultimateFib[0]), digits);
    index += one;
    console.log(lastAndPenultimateFib[0]);
  } while (!met)
    return index;
}
const nextFibNumber = ([lastFib = one, penultimateFib = zero]) => {   
  return [lastFib + penultimateFib, lastFib];
}


console.log(findFibonacciIndexByLength(10000n) === 47847n);