const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let copy = arr.map(sub => {
  if (Array.isArray(sub))
    return [...sub];
  return {...sub};
})

arr[2].b = 'HELLO';

console.log(copy);
console.log(arr);
                          