function sum(num) {
  return num.toString().split('').reduce((sum, num) => {
    return sum + parseInt(num);
  }, 0);
};

console.log(sum(23));           // 5  
console.log(sum(496));          // 19  
console.log(sum(123456789));    // 45