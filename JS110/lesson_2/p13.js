const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let copy = {...truthiness};
  for (key in copy) {
    copy[key] = [...copy[key]];
  }

truthiness['truthy'] = 1;
console.log(truthiness);
console.log(copy);