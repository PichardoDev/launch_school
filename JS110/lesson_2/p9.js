let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(sub => {
  if (typeof sub[0] === 'number') {
    return sub.slice().sort((a, b) =>  Number(b) - Number(a));
  } else {
    return sub.slice().sort((a, b));
  }
  })

console.log(newArr);
