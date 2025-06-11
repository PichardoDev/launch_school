const Fraction = require('fraction.js');
function sumEgyptianFractions(egyptianDenominators) {
  return egyptianDenominators.reduce((sum, denominator) => sum
  .add(new Fraction(1, denominator)), new Fraction(0, 1));
}

function egyptian(rational) {
  egyptianDenominators = [];
  let denominator = 1;
  while (!rational.equals(sumEgyptianFractions(egyptianDenominators))) {
    egyptianDenominators.push(denominator);
    if (sumEgyptianFractions(egyptianDenominators).compare(rational) > 0) {
      egyptianDenominators.pop();
    }
    denominator += 1;
  } 
  return egyptianDenominators;
}


function unegyptian(denominators) {
  return sumEgyptianFractions([...denominators]).valueOf();
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3