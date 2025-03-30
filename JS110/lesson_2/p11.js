let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


let copy = arr.map(obj => {
  let copyObj = {...obj};
  for (key in copyObj) {
    copyObj[key] += 1;  
  }
  return copyObj;
})


console.log(copy);