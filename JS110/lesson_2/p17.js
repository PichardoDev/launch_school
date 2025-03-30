let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let everyCallback = (element) => {
  if (Array.isArray(element)) {
    return element.every(everyCallback);
  } else {
    return element % 2 === 0;
  }
}

let newArr = arr.filter(obj => {
  return Object.values(obj).every(everyCallback);
})

console.log(newArr);