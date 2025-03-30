let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let narr = [...arr];

narr.sort((a, b) => {
  let callback = (accum, num) => num % 2 !== 0 ? accum + num : accum;
  return (a.reduce(callback, 0) - b.reduce(callback, 0)); 
})

console.log(narr)