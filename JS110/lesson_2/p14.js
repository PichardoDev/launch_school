let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiples = arr.map(sub => {
  return sub.filter(num => num % 3 === 0);
})
console.log(multiples);