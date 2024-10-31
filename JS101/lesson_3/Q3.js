function prompt(message) {
  console.log('=> ' + message);
}

function factors(number) {
  let divisor = number;
  let factors = [];

  for (divisor; divisor >= 1; divisor -= 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
  }
  return factors;
}

prompt(factors(12));