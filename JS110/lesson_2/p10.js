let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(sub => {
    return sub.slice().sort((a, b) => (b > a) && 1 || -1);
  })

console.log(newArr);