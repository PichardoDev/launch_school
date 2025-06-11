const MAX_FEATURED_NUM = 9876543201;

function hasUniqueDigits(number) {
  const digitOccurrence = {};

  let arrNumber = String(number).split('');
  for (let i = 0; i <= arrNumber.length - 1; i += 1) {
    if (digitOccurrence[arrNumber[i]]) {
   return false;
    } else {
      digitOccurrence[arrNumber[i]] = 1;
    }
  }
  return true;
}

function featured(number) {
  let next = number;

  while (next < MAX_FEATURED_NUM) {
    next += 1;
    if ((next % 7 === 0) && next % 2 === 1 && hasUniqueDigits(next)) return next;
  }
  return "There is no possible number that fulfills those requirements."
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."