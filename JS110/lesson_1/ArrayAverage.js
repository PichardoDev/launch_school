function average(array) {
  let average = 0;
  array.forEach((element) => {
    average += element;
  });

  return Math.floor(average / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25  
console.log(average([9, 47, 23, 95, 16, 52]));    // 40