let arr = [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12];


arr.forEach(val => {
  console.log(val);
  arr.shift();

})
console.log(arr);