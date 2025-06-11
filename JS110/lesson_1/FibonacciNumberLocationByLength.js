const SAVED_FIBS = {
};

function fibonacci(n) {
  if (n <= 2) return 1;
  SAVED_FIBS[n] = SAVED_FIBS[n] && SAVED_FIBS[n] || fibonacci(n - 1) + fibonacci(n - 2);
  return SAVED_FIBS[n];
}

console.log(fibonacci(20));    // 6765
console.log(fibonacci(50));    // 12586269025
console.log(fibonacci(75));    // 2111485077978050
console.log(SAVED_FIBS);